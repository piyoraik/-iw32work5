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

// Routing
app.use('/', indexRouter)
app.use('/users', userRouter)

// Listen
app.listen(port)
