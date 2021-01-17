var express = require('express');
var router = express.Router();

const loggedUser = require("../middleware/loggedUser");

const dashboardController= require('../controllers/dashboardController')

/* GET home page. */
router.get('/',loggedUser, dashboardController.raiz);

router.post('/',loggedUser,dashboardController.crear);


router.get('/edit/:id',loggedUser,dashboardController.edit);

router.post('/update/:id',loggedUser,dashboardController.update);


router.get('/eliminar/:id',dashboardController.eliminar);

router.post('/destroy/:id',dashboardController.destroy);

module.exports = router;