var db = require('../database/models/index.js');

let obituariosController={


    raiz:(req, res, next)=> {

        db.Obituario.findAll()
		.then(obituarios => {
			
			res.render("obituarios", {obituarios});
		})
		.catch(error => console.log(error));
},
    
    
    
    
    }
    
    module.exports = obituariosController