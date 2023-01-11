const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Blog', BlogSchema)