var express = require('express');
var router = express.Router();



const dashboardController= require('../controllers/dashboardController')

/* GET home page. */
router.get('/', dashboardController.raiz);

router.post('/',dashboardController.crear);

module.exports = router;