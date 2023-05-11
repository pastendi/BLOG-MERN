const express = require('express')
const { createPost } = require('../controllers/postController')
const auth = require('../middlewares/authHandler')
const router = express.Router()

router.route('/').post(auth, createPost)

module.exports = router
