const sharp = require('sharp')
const path = require('path')
const resizeProfileImage = async (req, res, next) => {
  if (!req.file) return next()
  req.file.fileName = `user-${Date.now()}-${req.file.originalname}`
  await sharp(req.file.buffer)
    .resize(250, 250, {
      kernel: sharp.kernel.nearest,
      fit: 'fill',
      position: 'top',
      background: { r: 255, g: 255, b: 255, alpha: 0.5 },
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(path.join(`public/temp/${req.file.fileName}`))
  next()
}

module.exports = resizeProfileImage
