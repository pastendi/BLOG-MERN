const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authHandler')

const {
  register,
  login,
  getUsers,
  changePassword,
} = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(auth, getUsers)
router.route('/change-password').patch(auth, changePassword)

module.exports = router
