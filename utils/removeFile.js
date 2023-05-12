const fs = require('fs')
const removeFile = (storagePath) => fs.unlinkSync(storagePath)
module.exports = removeFile
