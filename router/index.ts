import { Router, Request, Response } from 'express'

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

const queryLog = (req: Request) => {
  if (req.method === 'POST') {
    console.log('post_data: ' + req.body.name)
  } else if (req.method === 'GET') {
    console.log('get_data: ' + req.query.name)
  }
}

export = indexRouter
