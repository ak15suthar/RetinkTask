const express = require('express')
const router = express.Router()

const controller = require('../controllers/blog.controller')

router.post('/add', controller.addBlog)
// router.post('/addblog', controller.addBlog)

module.exports = router