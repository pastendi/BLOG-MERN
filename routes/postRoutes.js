const express = require('express')
const auth = require('../middlewares/authHandler')
const uploadImage = require('../middlewares/uploadImage')
const resizePostImage = require('../middlewares/resizePostImage')
const router = express.Router()
const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} = require('../controllers/postController')

router
  .route('/')
  .post(auth, uploadImage.single('image'), resizePostImage, createPost)
router.route('/').get(getAllPosts)
router.route('/:id').get(getPost)
router
  .route('/:id')
  .patch(auth, uploadImage.single('image'), resizePostImage, updatePost)

module.exports = router
