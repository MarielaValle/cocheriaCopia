var express = require('express');
var router = express.Router();



const dashboardController= require('../controllers/dashboardController')

/* GET home page. */
router.get('/', dashboardController.raiz);

router.post('/',dashboardController.crear);


router.get('/edit/:id',dashboardController.edit);

router.post('/update/:id',dashboardController.update);


router.get('/eliminar/:id',dashboardController.eliminar);

router.post('/destroy/:id',dashboardController.destroy);

module.exports = router;