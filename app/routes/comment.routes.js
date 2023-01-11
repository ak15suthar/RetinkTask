const express = require('express')
const router = express.Router()

const controller = require('../controllers/comment.controller')

router.post('/add', controller.addComment)
// router.post('/addblog', controller.addBlog)

module.exports = router