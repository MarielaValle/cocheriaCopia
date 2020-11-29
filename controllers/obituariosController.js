var db = require('../database/models/index.js');

let obituariosController={


    raiz:(req, res, next)=> {

        db.Obituario.findAll()
		.then(obituarios => {
			
			res.render("obituarios", {obituarios});
		})
		.catch(error => console.log(error));
},
    
    detalle:(req,res,next)=>{


        db.Obituario.findByPk(req.params.id)

        .then(obito =>{

            res.render('detalleObito', {obito})
        })
        .catch(error => console.log(error));
    }
    
    
    }
    
    module.exports = obituariosController