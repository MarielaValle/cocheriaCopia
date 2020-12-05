var express = require('express');

var router = express.Router();



const prepagaController = require('../controllers/prepagaController')

/* GET home page. */
router.get('/', prepagaController.raiz)



module.exports = router;