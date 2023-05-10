const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authHandler')
const uploadProfile = require('../middlewares/uploadProfile')

const {
  register,
  login,
  getUsers,
  changePassword,
  followUnfollow,
  blockUnblock,
  profile,
} = require('../controllers/userController')
const resizeImage = require('../middlewares/resizeImage')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(auth, getUsers)
router
  .route('/profile')
  .patch(uploadProfile.single('image'), resizeImage, profile)
router.route('/follow-unfollow').patch(auth, followUnfollow)
router.route('/block-unblock').patch(auth, blockUnblock)
router.route('/change-password').patch(auth, changePassword)

module.exports = router
