const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authHandler')

const { register, login, getUsers } = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(auth, getUsers)

module.exports = router
