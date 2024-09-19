let express = require('express')
let router= express.Router()
let { cartAdd, fetchCart, decrementItem, incrementItem,removeFromCart, makePayment, fetchCartById } = 
require('../controllers/cartControllers.js')

router.post('/cartAdd',cartAdd)
router.post('/fetchCart',fetchCart)
router.post('/incrementItem', incrementItem)
router.post('/decrementItem', decrementItem)
router.post('/removeFromCart', removeFromCart)
router.post('/makePayment',makePayment)
router.post('/fetchCartById',fetchCartById)
module.exports = router