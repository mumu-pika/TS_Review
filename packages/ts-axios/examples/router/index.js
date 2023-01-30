// Router 路由设置
const express = require('express')

const router = express.Router()
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello simple'
  })
})
router.get('/base/get', (req, res) => {
  res.json(req.query)
})

router.post('/base/post', (req, res) => {
  res.json(req.body)
})

router.post('/base/buffer', (req, res) => {
  let msg = []
  req.on('data', (chunk) => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

module.exports = router
