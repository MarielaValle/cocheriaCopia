var express = require('express');
var router = express.Router();



const acercaDeController = require('../controllers/acercaDeController')

/* GET home page. */
router.get('/', acercaDeController.raiz)

module.exports = router;