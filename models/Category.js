const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Slugify required'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Category', CategorySchema)
