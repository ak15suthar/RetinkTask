//responses
const responses = require('../utils/responses')

//model
const Blog = require('../models/Blog.model')

//add blog
exports.addBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body)
        const saveBlog = await blog.save()

        //send response 
        return responses.successfullyCreatedResponse(
            res,
            saveBlog,
            "Successfully added blog..."
        )
    } catch (error) {
        console.log(error);
        responses.serverErrorResponse(res, "Server Error...")
    }
}