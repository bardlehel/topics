var express = require('express');
var router = express.Router();
var Category = require('../models/category.js');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Category.find({}, function(err, categories) {
        if (err)res.send(err);

        res.json(categories);
    });
});

//GET single entry by id
router.get('/:category_id', function(req, res, next) {
    Category.findById(req.params.category_id, function(err, category) {
        if (err)res.send(err);

        res.json(category);
    });
});

//POST new category
router.post('/', passport.authenticate('token'), function(req, res, next) {
    var category = new Category();

    category.name = req.body.name;
    category.parent_id = req.body.parent_id;
    category.author = req.user._id;
    category.creation_date = Date.now;
    category.last_publish_date = Date.now;
    category.up_votes = 1;
    category.properties = JSON.parse(req.body.properties);

    category.save(function(err) {
        if (err)res.send(err);
        res.json({'message' : 'category was added'});
    });
});

//update (PUT) new category
router.put('/:category_id', passport.authenticate('token'), function(req, res, next) {
    Category.findById(req.params.category_id, function(err, category) {
        if (err)res.send(err);

        category.name = req.body.name;
        category.parent_id = req.body.parent_id;
        category.last_publish_date = Date.now;
        if(req.body.up_votes > category.up_votes) category.up_votes++;
        else if(req.body.down_votes > category.down_votes) category.down_votes++;
        category.properties = JSON.parse(req.body.properties);

        category.save(function(err) {
            if (err)res.send(err);
            res.json({'message' : 'category was updated'});
        });
    });
});

module.exports = router;
