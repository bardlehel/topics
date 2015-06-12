var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: [
            'text',
            'number',
            'url',
            'date',
            'geocode',
            'date',
            'time',
            'day_of_week',
            'start_index',
            'end_index'
        ]
    },
    value: String
});


var RatingSchema = new mongoose.Schema({
    tag: {type: mongoose.Schema.Types.ObjectId, ref: 'RatedTag'},
    up_votes: Number,
    down_votes: Number
});

var CommentSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    post_date: mongoose.Schema.Types.Date
});

module.exports = mongoose.model('Topic',{
    _id: mongoose.Schema.Types.ObjectId,
    version: Number,
    category:  {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    name: String,
    up_votes: Number,
    down_votes: Number,
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: mongoose.Schema.Types.Date,
    last_publish_date: mongoose.Schema.Types.Date,
    properties: [PropertySchema],
    ratings: [RatingSchema],
    comments: [CommentSchema]
});
