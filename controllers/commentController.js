const { StatusCodes } = require('http-status-codes')
const Comment = require('../models/Comment')
const Post = require('../models/Post')
const { BadRequestError } = require('../errors')

const createComment = async (req, res) => {
  const user = req.user.id
  const { postId, message } = req.body
  const post = await Post.findById(postId)
  const comment = await Comment.create({ user, post: postId, message })
  res.status(StatusCodes.CREATED).json({ comment })
}
module.exports = { createComment }
