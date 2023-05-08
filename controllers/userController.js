const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const { email } = req?.body
  const userExist = await User.findOne({ email })
  if (userExist) throw new Error('User already exist')
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({
    user,
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
  res.status(StatusCodes.OK).json({ user, msg: 'Login successful' })
}
module.exports = { register, login }
