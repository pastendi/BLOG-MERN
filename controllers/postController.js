const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthorizedError } = require('../errors')
const Filter = require('bad-words')
const Post = require('../models/Post')
const User = require('../models/User')
const filter = new Filter()
const createPost = async (req, res) => {
  const userId = req.user.id
  const user = await User.findById(userId)
  if (user.isBlocked) {
    throw new UnauthorizedError('Currently you are blocked')
  }
  const containsBadWord = filter.isProfane(req.body.title, req.body.description)
  // block user who uses bad word in post
  if (containsBadWord) {
    await User.findByIdAndUpdate(userId, { isBlocked: true })
    throw new BadRequestError(
      'Post failed because it contains bad words and you have been blocked'
    )
  }
  const post = await Post.create({ ...req.body, userId })
  res.status(StatusCodes.CREATED).json({ post })
}
module.exports = { createPost }
