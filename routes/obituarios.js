var express = require('express');
var router = express.Router();



const obituariosController = require('../controllers/obituariosController')

/* GET home page. */
router.get('/', obituariosController.raiz)

module.exports = router;