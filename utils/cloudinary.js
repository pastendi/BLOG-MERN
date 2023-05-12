const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const cloudinaryUpload = async (file) => {
  try {
    const data = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
    })
    return { url: data?.secure_url, cloudinaryName: data?.public_id }
  } catch (error) {
    console.log(error)
  }
}
const cloudinaryDelete = async (assetName) => {
  try {
    await cloudinary.uploader.destroy(assetName)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { cloudinaryUpload, cloudinaryDelete }
