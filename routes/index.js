var express = require('express');
var router = express.Router();



const indexController=require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.raiz);


router.get('/register',indexController.register);

router.post('/registrar',indexController.registrar);



router.get('/login',indexController.login);


router.post('/login',indexController.ingresar);


router.get('/logout',indexController.logout)

module.exports = router;
