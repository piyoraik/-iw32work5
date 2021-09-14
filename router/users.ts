import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', function (req, res) {
  console.log('GET: ' + req.query.name)
  var senddata = {
    name: req.query.name,
  }
  res.send(senddata)
})
userRouter.post('/', function (req, res) {
  console.log('POST: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})
userRouter.put('/', function (req, res) {
  console.log('PUT: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})
userRouter.delete('/', function (req, res) {
  console.log('DELETE: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})

export = userRouter
