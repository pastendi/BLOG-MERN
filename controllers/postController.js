const { StatusCodes } = require('http-status-codes')
const Post = require('../models/Post')
const createPost = async (req, res) => {
  const userId = req.user.id
  const post = await Post.create({ ...req.body, userId })
  res.status(StatusCodes.CREATED).json({ post })
}
module.exports = { createPost }
