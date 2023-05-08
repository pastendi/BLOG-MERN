const express = require('express')
const connectDB = require('./connectDB')
require('express-async-errors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

// middleware
app.use(errorHandlerMiddleware)
connectDB()
const port = process.env.PORT || 5000
app.listen(port, console.log(`Server is running at port ${port}`))
