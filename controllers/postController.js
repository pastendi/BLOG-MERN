const Post = require('../models/Post')
const createPost = async (req, res) => {
  res.json('created')
}
module.exports = { createPost }
