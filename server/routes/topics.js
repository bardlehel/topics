var express = require('express');
var router = express.Router();
var Topic = require('../models/topic.js');
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
    Topic.find({}, function(err, topics) {
        if (err)res.send(err);

        res.json(topics);
    });
});

//GET single entry by id
router.get('/:topic_id', function(req, res, next) {
    Topic.findById(req.params.topic_id, function(err, topic) {
        if (err)res.send(err);

        res.json(topic);
    });
});

//POST new topic
router.post('/', passport.authenticate('token'), function(req, res, next) {
    var topic = new Topic();

    topic.name = req.body.name;
    topic.version = 1;
    topic.category = req.body.category_id;
    topic.author = req.user._id;
    topic.creation_date = Date.now;
    topic.last_publish_date = Date.now;
    topic.up_votes = 1;
    topic.properties = JSON.parse(req.body.properties);

    topic.save(function(err) {
        if (err)res.send(err);
        res.json({'message' : 'topic was added'});
    });
});

//update (PUT) new topic
router.put('/:topic_id', passport.authenticate('token'), function(req, res, next) {
    Topic.findById(req.params.topic_id, function(err, topic) {
        if (err)res.send(err);

        topic.name = req.body.name;
        topic.version++;
        topic.parent_id = req.body.parent_id;
        topic.last_publish_date = Date.now;
        if(req.body.up_votes > topic.up_votes) topic.up_votes++;
        else if(req.body.down_votes > topic.down_votes) topic.down_votes++;
        topic.properties = JSON.parse(req.body.properties);

        topic.save(function(err) {
            if (err)res.send(err);
            res.json({'message' : 'topic was updated'});
        });
    });
});

//rate tag for topic  /topic_id/vote/tag_id/(- 1, 0 or 1)
router.put('/:topic_id/vote/:tag_id/:vote', passport.authenticate('token'), function(req, res, next) {
    Topic.findById(req.params.topic_id, function(err, topic) {
        if (err)res.send(err);

        //did we vote for this tag yet?


        topic.save(function(err) {
            if (err)res.send(err);
            res.json({'message' : 'topic was updated'});
        });
    });
});

module.exports = router;
