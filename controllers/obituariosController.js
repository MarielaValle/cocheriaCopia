var db = require('../database/models/index.js');
const { Sequelize, sequelize } = require('../database/models/index.js');
const Op = Sequelize.Op;

let obituariosController = {


    raiz: (req, res, next) => {

        db.Obituario.findAll({

            order : [

                ["fecha", "DESC"]

            ],
            limit: 12

        })
            .then(obituarios => {

                res.render("obituarios", { obituarios });
            })
            .catch(error => console.log(error));
    },

    detalle: (req, res, next) => {


        db.Obituario.findByPk(req.params.id)

            .then(obito => {

                res.render('detalleObito', { obito })
            })
            .catch(error => console.log(error));
    },

    searchA: (req, res, next) => {

        db.Obituario.findAll({

            where: {

                apellido: req.query.keyword

            },


        })
            .then(results => {

                res.render("results", { results, search: req.query.keyword });
            })
            .catch(error => console.log(error));

    },

    searchD: (req, res, next) => {



        db.Obituario.findAll({

            where: {

                fecha: new Date(req.query.date)

            }

        })


            .then(results => {

                console.log(results)

                res.render("results", { results, search: req.query.date });
            })
            .catch(error => console.log(error));

    },


    searchM: (req, res, next) => {

        let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        var mes = meses.indexOf(req.query.mes)
        console.log(mes)

        let fechaI = '2020,' + (mes + 1) + ',1'
        let fechaF = '2020,' + (mes + 1) + ',31'
        console.log(fechaI)

        db.Obituario.findAll({

            where: {

                fecha: { [Op.between]: [fechaI, fechaF] }
            }

        })


            .then(results => {

                console.log(results)

                res.render("results", { results, search: req.query.mes });
            })
            .catch(error => console.log(error));

    }


}

module.exports = obituariosController