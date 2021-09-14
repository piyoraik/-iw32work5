import { Router, Request, Response } from 'express'
import { methodJudge } from '../app'

const indexRouter = Router()

let cnt = 0

indexRouter.get('/', function (req: Request, res: Response) {
  queryLog(req)
  res.render('index.ejs', {
    cnt,
  })
  cnt++
})

indexRouter.post('/', function (req: Request, res: Response) {
  queryLog(req)
  res.render('index.ejs', {
    cnt,
  })
  cnt++
})

indexRouter.get('/page1', function (req: Request, res: Response) {
  methodJudge(req)
  res.render('page1.ejs')
})

indexRouter.get('/page2/:user', function (req: Request, res: Response) {
  const user = req.params.user
  res.render('page2.ejs', {
    user,
  })
})

// method
const queryLog = (req: Request) => {
  if (req.method === 'POST') {
    console.log('post_data: ' + req.body.name)
  } else if (req.method === 'GET') {
    console.log('get_data: ' + req.query.name)
  }
}

export = indexRouter
