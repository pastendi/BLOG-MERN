const express = require('express')
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} = require('../controllers/categoryController')
const auth = require('../middlewares/authHandler')
const router = express.Router()

router.route('/').post(auth, createCategory).get(getAllCategories)
router.route('/:id').patch(auth, updateCategory).get(getCategory)
module.exports = router
