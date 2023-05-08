const jwt = require('jsonwebtoken')

const createJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { createJWT, verifyToken }
