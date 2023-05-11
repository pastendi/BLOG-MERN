const sharp = require('sharp')
const path = require('path')
const resizePostImage = async (req, res, next) => {
  if (!req.file) return next()
  req.file.fileName = `user-${Date.now()}-${req.file.originalname}`
  await sharp(req.file.buffer)
    .resize(800, 600, {
      kernel: sharp.kernel.nearest,
      fit: 'contain',
      position: 'top',
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(path.join(`public/temp/${req.file.fileName}`))
  next()
}

module.exports = resizePostImage
