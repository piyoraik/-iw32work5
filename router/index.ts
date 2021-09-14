import { Router, Request } from 'express'

const indexRouter = Router()

let cnt = 0

indexRouter.get('/', function (req, res) {
  queryLog(req)
  res.render('index.ejs', {
    cnt,
  })
  cnt++
})

indexRouter.post('/', function (req, res) {
  queryLog(req)
  res.render('index.ejs', {
    cnt,
  })
  cnt++
})

indexRouter.get('/page1', function (req, res) {
  res.render('page1.ejs', {
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
