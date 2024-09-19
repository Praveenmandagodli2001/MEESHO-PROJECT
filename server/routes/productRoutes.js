let express = require('express')
let router = express.Router()
let {addProducts} = require('../controllers/productControllers')
let {getProducts} = require('../controllers/productControllers')
let {getProductsOfSeller,getProductById} = require('../controllers/productControllers')


router.post('/addProduct',addProducts)
router.get('/getProducts',getProducts)
router.post('/getProductById',getProductById)
router.post('/getProductsOfSeller',getProductsOfSeller)

module.exports = router