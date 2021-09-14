import { Router } from 'express'

const indexRouter = Router()

let cnt = 0

indexRouter.get('/page1', function (req, res) {
  console.log(req.query.text_get)
  res.render('page1.ejs', {
    cnt,
  })
  cnt++
})

export = indexRouter
