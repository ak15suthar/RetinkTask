//responses
const responses = require('../utils/responses')

//model
const Author = require('../models/Author.model')

//add author
exports.addAuthor = async (req, res) => {
    try {
        const author = new Author(req.body)
        const saveAuthor = await author.save()

        //send response 
        return responses.successfullyCreatedResponse(
            res,
            saveAuthor,
            "Successfully added author..."
        )
    } catch (error) {
        console.log(error);
        responses.serverErrorResponse(res, "Server Error...")
    }
}