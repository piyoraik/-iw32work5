import { Router } from 'express'

const router = Router()

let cnt = 0

router.get('/page1', function (req, res) {
  console.log(req.query.text_get)
  res.render('page1.ejs', {
    cnt,
  })
  cnt++
})

module.exports = router
