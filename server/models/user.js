var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    //_id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    email: String,
    gender: String,
    address: String
});
