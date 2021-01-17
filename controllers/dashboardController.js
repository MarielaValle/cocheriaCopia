var db = require('../database/models/index.js');
const { Sequelize, sequelize } = require('../database/models/index.js');
const Op = Sequelize.Op;

let dashboardController = {

    raiz: (req, res, next) => {


        db.Obituario.findAll({

            order: [

                ["fecha", "DESC"]

            ],


        }).then(obituarios => {

            res.render("dashboard", { obituarios });

        }).catch(error => console.log(error));

    },


    crear: (req, res, next) => {      //crear producto nuevo

        db.Obituario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fecha: req.body.fecha,
            imagen: req.body.imagen
        })


        res.redirect("/dashboard");


    },

    edit: (req, res, next) => {


        db.Obituario.findByPk(req.params.id)
            .then(function (resultado) {
                obitoEdit = resultado


                let data = {
                    Formulario: 'ObituarioEdit',
                    mensajeA: '',
                    mensajeE: 'Puede realizar los cambios que desee y luego apretar botón enviar'
                }

                res.render("formsDashboard", { data, obitoEdit });


            }).catch(error => console.log(error));


    },

    update: (req, res, next) => {

        db.Obituario.update({

            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fecha: req.body.fecha,
            imagen: req.body.imagen

        },
        {

			where:
				{ id: req.params.id }
		})
        res.redirect("/dashboard");

    },

    eliminar: (req, res, next) => {


        db.Obituario.findByPk(req.params.id)
            .then(function (resultado) {
                obitoEdit = resultado


                let data = {
                    Formulario: 'ObituarioEliminar',
                    mensajeA: 'El registro de óbito se eliminará, ¿está seguro de continuar?',
                    mensajeE: ''
                }

                res.render("formsDashboard", { data, obitoEdit });


            }).catch(error => console.log(error));


    },

    destroy: (req, res, next) => {

        db.Obituario.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/dashboard');

    }

}

module.exports = dashboardController