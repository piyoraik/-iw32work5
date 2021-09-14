import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  console.log('GET: ' + req.query.name)
  var senddata = {
    name: req.query.name,
  }
  res.send(senddata)
})
router.post('/', function (req, res) {
  console.log('POST: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})
router.put('/', function (req, res) {
  console.log('PUT: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})
router.delete('/', function (req, res) {
  console.log('DELETE: ' + req.body.name)
  var senddata = {
    name: req.body.name,
  }
  res.send(senddata)
})

module.exports = router
