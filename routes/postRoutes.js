const express = require('express')
const { createPost } = require('../controllers/postController')
const auth = require('../middlewares/authHandler')
const uploadImage = require('../middlewares/uploadImage')
const resizePostImage = require('../middlewares/resizePostImage')
const router = express.Router()

router
  .route('/')
  .post(auth, uploadImage.single('image'), resizePostImage, createPost)

module.exports = router
