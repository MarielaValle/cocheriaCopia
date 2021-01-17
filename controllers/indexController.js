
const bcrypt = require('bcrypt');


const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');

let archivoUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


let indexController = {


        raiz: (req, res, next) => {
                res.render('index');


        },

        register: (req, res, next) => {


                let data = {
                        Formulario: 'Register',
                        mensajeA: '',
                        mensajeE: ''
                }

                res.render("formsDashboard", { data });


        },

        registrar: (req, res, next) => {

                let usuarioAdmin = {

                        usuario: req.body.usuario,
                        contrasenia: bcrypt.hashSync(req.body.contrasenia,10)

                }

                

                archivoUsuarios.push(usuarioAdmin);

                console.log(archivoUsuarios)

               let  usuariosJson = JSON.stringify(archivoUsuarios);

                fs.writeFileSync(usuariosFilePath,usuariosJson,)

                res.redirect("/login");
        },


        login: (req, res, next) => {


                let data = {
                        Formulario: 'Login',
                        mensajeA: '',
                        mensajeE: ''
                }

                res.render("formsDashboard", { data });


        },

        ingresar: (req, res, next) => {


        for (let i=0; i< archivoUsuarios.length; i++){
                
                let nombre=archivoUsuarios[i]
                if (req.body.usuario== nombre.usuario && bcrypt.compareSync(req.body.contrasenia, nombre.contrasenia)){
                  
                      

                      req.session.user=nombre
                      let userLogged= req.session.user

                      console.log(userLogged)
               
                 res.redirect('/dashboard')
                    
              
            }else{

                
                let data = {
                        Formulario: 'Login',
                        mensajeA: 'Credenciales inválidas',
                        mensajeE: ''
                }

                res.render("formsDashboard", { data });
             
              
            }


        }
},
logout: (req, res) => {
       
        req.session.user = undefined;
     
         userLogged= req.session.user

        let data = {
                Formulario: 'Login',
                mensajeA: '',
                mensajeE: 'Se cerró la sesión exitosamente'
        }
        res.render("formsDashboard", { data });


    },


}

module.exports = indexController