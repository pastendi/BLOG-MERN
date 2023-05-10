const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authHandler')

const {
  register,
  login,
  getUsers,
  changePassword,
  followUnfollow,
} = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(auth, getUsers)
router.route('/follow-unfollow').patch(auth, followUnfollow)
router.route('/change-password').patch(auth, changePassword)

module.exports = router
