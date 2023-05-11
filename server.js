const express = require('express')
const connectDB = require('./connectDB')
require('express-async-errors')
require('dotenv').config()
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFound')
const app = express()
app.use(express.json())

// routes
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

// pipelines

app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

// middleware
app.use(notFound)
app.use(errorHandler)
connectDB()
const port = process.env.PORT || 5000
app.listen(port, console.log(`Server is running at port ${port}`))
