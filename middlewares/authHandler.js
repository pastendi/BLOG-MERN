const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new Error('Authentication Invalid')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id: payload.id }
    next()
  } catch (error) {
    throw new Error('Authentication Invalid')
  }
}
module.exports = auth
