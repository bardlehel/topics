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
    } });

module.exports = mongoose.model('Category',{
    _id: mongoose.Schema.Types.ObjectId,
    parent_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    name: String,
    up_votes: Number,
    down_votes: Number,
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: mongoose.Schema.Types.Date,
    last_publish_date: mongoose.Schema.Types.Date,
    properties: [PropertySchema]
});