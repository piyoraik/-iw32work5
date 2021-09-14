import { Router, Request, Response } from 'express'
import { methodJudge } from '../app'

const userRouter = Router()

userRouter.get('/', function (req: Request, res: Response) {
  methodJudge(req)
  const sendData = {
    name: req.query.name,
  }
  res.send(sendData)
})
userRouter.post('/', function (req: Request, res: Response) {
  methodJudge(req)
  const sendData = {
    name: req.body.params.name,
  }
  res.send(sendData)
})
userRouter.put('/', function (req: Request, res: Response) {
  methodJudge(req)
  const sendData = {
    name: req.body.params.name,
  }
  res.send(sendData)
})
userRouter.delete('/', function (req: Request, res: Response) {
  methodJudge(req)
  const sendData = {
    name: req.query.name,
  }
  res.send(sendData)
})

export = userRouter
