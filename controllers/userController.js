const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { createJWT, verifyToken } = require('../token')

const register = async (req, res) => {
  const { email } = req?.body
  const userExist = await User.findOne({ email })
  if (userExist) throw new Error('User already exist')
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
    throw new Error('Please provide email and password')
  }
  const user = await User.findOne({ email })
  const isPasswordCorrect = await user?.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials')
  }
  const token = createJWT(user._id)
  res.status(StatusCodes.OK).json({ user, token, msg: 'Login successful' })
}
const getUsers = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}
module.exports = { register, login, getUsers }
