var express = require('express');
var router = express.Router();



const galeriaController = require('../controllers/galeriaController')

/* GET home page. */
router.get('/', galeriaController.raiz)

module.exports = router;