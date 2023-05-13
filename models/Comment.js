const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User id required'],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post id required'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Comment', CommentSchema)
