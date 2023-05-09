const { StatusCodes } = require('http-status-codes')
const errorHandler = (err, req, res, next) => {
  const error = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  }
  if (err.name === 'ValidationError') {
    error.statusCode = StatusCodes.BAD_REQUEST
    error.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  if (err.code && err.code === 11000) {
    error.statusCode = StatusCodes.BAD_REQUEST
    error.msg = `${Object.keys(err.keyValue)} field has to be unique`
  }
  if (err.name === 'CastError') {
    error.msg = `No item found with id : ${err.value}`
    error.statusCode = StatusCodes.NOT_FOUND
  }
  res.status(error.statusCode).json({ msg: error.msg })
}

module.exports = errorHandler
