var mongoose = require('mongoose');

var RatedTagSchema = new mongosee.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: mongoose.Schema.Types.Date
});

module.exports = mongoose.model('RatedTag',RatedTagSchema);
