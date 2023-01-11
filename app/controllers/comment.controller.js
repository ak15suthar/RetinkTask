//responses
const responses = require('../utils/responses')

//model
const Comment = require('../models/Comment.model')

//add comment
exports.addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body)
        const saveComment = await comment.save()

        //send response 
        return responses.successfullyCreatedResponse(
            res,
            saveComment,
            "Successfully added comment..."
        )
    } catch (error) {
        console.log(error);
        responses.serverErrorResponse(res, "Server Error...")
    }
}