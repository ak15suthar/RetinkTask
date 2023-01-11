const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.listen(3200)

const authorRoutes = require('./app/routes/author.routes')
const blogRoutes = require('./app/routes/blog.routes')
const commentRoutes = require('./app/routes/comment.routes')

app.use('/author', authorRoutes)
app.use('/blog', blogRoutes)
app.use('/comment', commentRoutes)

//connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected');
})