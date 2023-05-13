const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authHandler')
const uploadImage = require('../middlewares/uploadImage')
const resizeProfileImage = require('../middlewares/resizeProfileImage')

const {
  register,
  login,
  getUsers,
  changePassword,
  followUnfollow,
  blockUnblock,
  profile,
} = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(auth, getUsers)
router
  .route('/profile')
  .patch(auth, uploadImage.single('image'), resizeProfileImage, profile)
router.route('/follow-unfollow').patch(auth, followUnfollow)
router.route('/block-unblock').patch(auth, blockUnblock)
router.route('/change-password').patch(auth, changePassword)

module.exports = router
