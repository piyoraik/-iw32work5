import express from 'express'

import userRouter from './router/users'
import indexRouter from './router'
import { port } from './config'

var app = express()
app.set('view engin', 'ejs')
app.use(express.static(__dirname + '/public', { index: false }))
app.use(express.static(__dirname + '/views', { index: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/users', userRouter)

const httpStatus = require('http-status-codes')
app.use(function (req, res, next) {
  res.status(httpStatus.StatusCodes.NOT_FOUND)
  res.sendFile(__dirname + '/views/notfound.html')
})

app.listen(port)
