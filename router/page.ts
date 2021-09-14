import { Router, Request, Response } from 'express'
import { methodJudge } from '../app'

const pageRouter = Router()

pageRouter.get('/', function (req: Request, res: Response) {
  methodJudge(req)
  res.render('page1.ejs')
})

export = pageRouter
