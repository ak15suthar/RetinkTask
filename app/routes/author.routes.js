const express = require('express')
const router = express.Router()

const controller = require('../controllers/author.controller')

router.post('/add', controller.addAuthor)
// router.post('/addblog', controller.addBlog)

module.exports = router