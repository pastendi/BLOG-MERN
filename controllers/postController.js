const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthorizedError } = require('../errors')
const Filter = require('bad-words')
const Post = require('../models/Post')
const User = require('../models/User')
const cloudinaryUpload = require('../utils/cloudinary')
const removeFile = require('../utils/removeFile')
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
  //upload to cloudinary
  const storagePath = `public/temp/${req.file.fileName}`
  const upload = await cloudinaryUpload(storagePath)
  removeFile(storagePath) //remove temp file
  const post = await Post.create({
    ...req.body,
    image: upload?.url,
    user: userId,
  })
  res.status(StatusCodes.CREATED).json({ post })
}
const getAllPosts = async (req, res) => {
  const posts = await Post.find({})
    .populate({
      path: 'user',
      select: ['firstName', 'email'],
    })
    .sort({ createdAt: -1 })
  res.json({ posts })
}
module.exports = { createPost, getAllPosts }
