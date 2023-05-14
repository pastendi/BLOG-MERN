const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Post title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Post category is required'],
    },
    description: {
      type: String,
      required: [true, 'Post description is required'],
    },
    image: {
      type: String,
      required: [true, 'Image required'],
    },
    cloudinaryImage: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    disLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User id required'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
)
PostSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
})
module.exports = mongoose.model('Post', PostSchema)
