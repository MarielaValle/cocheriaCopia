




let prepagaController = {



    raiz: (req, res, next) => {

        let presentacion = ["andes-logo.png", "presentacion.png"];

        let prepaga = ['plan-uno.png', 'plan-dos.png', 'plan-tres.png'];

        

        res.render('prepaga', { presentacion,prepaga })
    }



}

module.exports = prepagaController;