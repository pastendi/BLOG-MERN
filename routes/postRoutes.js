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
  deletePost,
  toggleLike,
  toggleDislike,
} = require('../controllers/postController')

router
  .route('/')
  .post(auth, uploadImage.single('image'), resizePostImage, createPost)
router.route('/').get(getAllPosts)
router.route('/:id').get(getPost)
router
  .route('/:id')
  .patch(auth, uploadImage.single('image'), resizePostImage, updatePost)
router.route('/:id').delete(auth, deletePost)
// like and dislike
router.route('/like/:id').patch(auth, toggleLike)
router.route('/dislike/:id').patch(auth, toggleDislike)

module.exports = router
