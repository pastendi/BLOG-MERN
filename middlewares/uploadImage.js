const multer = require('multer')

const multerStorage = multer.memoryStorage()

// file type checking
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb({ message: 'Unsuppported file format' }, false)
  }
}

const uploadImage = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
})

module.exports = uploadImage
