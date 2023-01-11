const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    blog: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: 'Blog'
    },
    userInfo: {
        email: {
            type: String,
            require: true,
            unique: true
        },
        comment: {
            type: String,
            require: true
        }
    }
})

module.exports = mongoose.model('Comment', CommentSchema)