var mongoose = require('mongoose');

var TagVoteSchema = new mongoose.Schema({
    tag: {type: mongoose.Schema.Types.ObjectId, ref: 'RatedTag'},
    voter: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    vote: mongoose.Schema.Types.Boolean
});

module.exports = mongoose.model('TagVote',TagVoteSchema);
