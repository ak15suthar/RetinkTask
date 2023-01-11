const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Author', AuthorSchema)