
const fs = require('fs');
const path = require('path');

const galeriaFilePath = path.join(__dirname, '../data/galeria.json');
let galeria = JSON.parse(fs.readFileSync(galeriaFilePath, 'utf-8'));


let galeriaController={

raiz:(req,res,next)=>{



    res.render('galeria',{galeria})
}



}

module.exports=galeriaController;