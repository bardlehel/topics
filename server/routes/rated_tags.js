var express = require('express');
var router = express.Router();
var passport = require('passport');
var RatedTag = require('../models/rated_tag.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    RatedTag.find({}, function(err, tags) {
        if (err)res.send(err);

        res.json(tags);
    });
});

//GET single entry by name
router.get('/:tag_name', function(req, res, next) {
    RatedTag.find({title: req.params.tag_name}, function(err, topic) {
        if (err)res.send(err);

        res.json(topic);
    });
});

//POST new tag
router.post('/', passport.authenticate('token'), function(req, res, next) {
    var ratedTag = new RatedTag();

    ratedTag.title = req.body.title;
    ratedTag.author = req.user;
    ratedTag.creation_date = Date.now;

    ratedTag.save(function(err) {
        if (err)res.send(err);
        res.json({'message' : 'rated tag  was added'});
    });
});

module.exports = router;

