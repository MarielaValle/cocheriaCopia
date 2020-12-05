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
    },

    searchA:(req,res,next)=>{
    
        db.Obituario.findAll({

         where:{

             apellido:req.query.keyword
                
            },
            

         })
		.then(results => {
			
			res.render("results", {results,search: req.query.keyword});
		})
		.catch(error => console.log(error));
        
    },

    searchD:(req,res,next)=>{

        

        db.Obituario.findAll({

         where:{

             fecha: new Date(req.query.date)
                
            }
           
         })
        

		.then(results => {

            console.log(results)
            
			res.render("results", {results,search: req.query.date});
		})
		.catch(error => console.log(error));
        
    },


    searchM:(req,res,next)=>{

    db.Obituario.findAll({

        

        where:{

            fecha: new Date(req.query.date)
               
           }
          
        })
       

       .then(results => {

           console.log(results)
           
           res.render("results", {results,search: req.query.date});
       })
       .catch(error => console.log(error));
       
   }
    
    
    }
    
    module.exports = obituariosController