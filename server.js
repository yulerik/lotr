const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const port = process.env.PORT
const uri = process.env.URI
// middleware
app.use(express.json())
app.use(morgan('dev'))
// connect to mongoDB
mongoose.connect(uri,() => console.log('mongoDB connected'))
// routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/lotr', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user


// error handling
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === 'UnauthroizedError') {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(port, () => {
    console.log(`server on ${port}`)
})