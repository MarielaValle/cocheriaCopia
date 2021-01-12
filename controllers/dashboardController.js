var db = require('../database/models/index.js');
const { Sequelize, sequelize } = require('../database/models/index.js');
const Op = Sequelize.Op;

let dashboardController={

    raiz:(req, res, next)=> {


        db.Obituario.findAll({
		
                order : [
    
                    ["fecha", "DESC"]
    
                ],
               
    
            }).then(obituarios => {
    
                    res.render("dashboard", { obituarios });
               
                }).catch(error => console.log(error));	

    },


    crear: (req, res, next) => {      //crear producto nuevo

		db.Obituario.create({
			nombre: req.body.nombre,
            apellido:req.body.apellido,
            fecha:req.body.fecha,
            imagen:req.body.imagen
		})

		
		res.redirect("/dashboard");


    }
    



    



    }
    
    module.exports = dashboardController