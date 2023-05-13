const express = require('express')
const router = express.Router()
const { createComment } = require('../controllers/commentController')
const auth = require('../middlewares/authHandler')

router.route('/').post(auth, createComment)
module.exports = router
