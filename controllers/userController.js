const User = require('../models/User')
const { createJWT } = require('../token')
const { UnauthenticatedError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const { email } = req?.body
  const userExist = await User.findOne({ email })
  if (userExist) throw new BadRequestError('User already exist')
  const user = await User.create(req.body)
  const token = createJWT(user._id)
  res.status(StatusCodes.CREATED).json({
    user,
    token,
    msg: 'User registered successfully',
  })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new UnauthenticatedError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  const isPasswordCorrect = await user?.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const token = createJWT(user._id)
  res.status(StatusCodes.OK).json({ user, token, msg: 'Login successful' })
}
const getUsers = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}
const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  const user = await User.findById(req.user?.id)
  const matchPassword = await user.comparePassword(oldPassword)
  if (!matchPassword)
    throw new UnauthenticatedError(`Old password didn't match`)
  user.password = newPassword
  const updateUser = await user.save()
  res
    .status(StatusCodes.OK)
    .json({ updateUser, msg: 'Password changed successfully' })
}
module.exports = { register, login, getUsers, changePassword }
