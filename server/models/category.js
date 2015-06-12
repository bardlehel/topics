var mongoose = require('mongoose');
var PropertySchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: [
            'Text',
            'Number',
            'Url',
            'Date',
            'Geocode',
            'Date',
            'Time',
            'Day_of_week',
            'Start_index',
            'End_index'
        ]
    } });

var mongoosePaginate = require('mongoose-paginate');

var CategorySchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    parent_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    name: String,
    up_votes: Number,
    down_votes: Number,
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: mongoose.Schema.Types.Date,
    last_publish_date: mongoose.Schema.Types.Date,
    properties: [PropertySchema]
});

CategorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Category', CategorySchema);