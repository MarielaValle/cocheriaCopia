var express = require('express');
var router = express.Router();



const serviciosController = require('../controllers/serviciosController')

/* GET home page. */
router.get('/', serviciosController.raiz);

router.get('/coberturaSearch', serviciosController.coberturaSearch);

module.exports = router;