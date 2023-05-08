const express = require('express')
const connectDB = require('./connectDB')
require('express-async-errors')
const dotenv = require('dotenv')
dotenv.config()
const errorHandler = require('./middlewares/errorHandler')
const app = express()
app.use(express.json())

// routes
const userRouter = require('./routes/userRoutes')

// pipelines

app.use('/api/user', userRouter)

// middleware
app.use(errorHandler)
connectDB()
const port = process.env.PORT || 5000
app.listen(port, console.log(`Server is running at port ${port}`))
