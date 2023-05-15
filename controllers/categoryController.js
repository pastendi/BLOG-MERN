const slugify = require('slugify')
const Category = require('../models/Category')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { UnauthorizedError } = require('../errors')
const createCategory = async (req, res) => {
  const { name } = req.body
  const currentUser = await User.findById(req.user.id)
  if (!currentUser.isAdmin)
    throw new UnauthorizedError(
      'Sorry but you are not authorized for this action'
    )
  const category = await Category.create({ name, slug: slugify(name) })
  res.status(StatusCodes.CREATED).json({ category })
}
const updateCategory = async (req, res) => {
  const { name } = req.body
  const currentUser = await User.findById(req.user.id)
  if (!currentUser.isAdmin)
    throw new UnauthorizedError(
      'Sorry but you are not authorized for this action'
    )
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name,
      slug: slugify(name),
    },
    { new: true }
  )
  res.status(StatusCodes.OK).json({ category })
}
const getAllCategories = async (req, res) => {
  const categories = await Category.find({})
  res.status(StatusCodes.OK).json({ categories })
}
const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id)
  res.status(StatusCodes.OK).json({ category })
}
module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
}
