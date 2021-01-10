
window.addEventListener("load", function () {

    const delay = 3000;

    setTimeout(miFuncion, delay);

    function miFuncion() {
        if (sessionStorage.getItem('visitante') == null) {


            let nombre = prompt('Hola! ¿cuál es tu nombre?')

            let bienvenido = document.querySelector('.bienvenido');

            if (nombre == null) {
                nombre = 'bienvenid@'
            }

            bienvenido.innerHTML = '¡Hola, ' + nombre + '!';

            sessionStorage.setItem('visitante', nombre)

        } else {
            nombre = sessionStorage.getItem('visitante')
            document.querySelector('.bienvenido').innerHTML = '¡Hola ' + nombre + '!';

        }

        // sessionStorage.clear();

        console.log(sessionStorage);

    }


    //------------------------
    let menuLink = document.querySelectorAll("#menuLink ul li a i");

    console.log(menuLink)



    for (let i = 0; i < menuLink.length; i++) {
        //menuLink.onmouseover=function(){

        menuLink[i].addEventListener("mouseover", function () {

            this.style.fontSize = "2em"
            this.style.color = "#9dc3e1"


            //menuLink.onmouseover=function(){        

        });

        menuLink[i].addEventListener("mouseout", function () {

            this.style.fontSize = "1.5em"
            this.style.color = "#d98e04"


            //menuLink.onmouseover=function(){        

        });

    }




    let fotoObituario = document.querySelectorAll('#obituarios section');

    for (let i = 0; i < fotoObituario.length; i++) {

        fotoObituario[i].addEventListener("mouseover", function () {

            this.style.width = "120%"




            //menuLink.onmouseover=function(){        

        });

        fotoObituario[i].addEventListener("mouseout", function () {

            this.style.width = "100%"



            //menuLink.onmouseover=function(){        

        });

    }



    let Obituarios = document.querySelector('.tituloO');




    let contador = 1;
    do {
        Obituarios.addEventListener('mouseout', function () {

            setTimeout(function () {
                let pregunta = confirm('¿Quieres conocer los planes Pre-Paga Los andes?');

                if (pregunta == true) {
                    location = 'https://cocheria-los-andes.herokuapp.com/prepaga'
                    
                               /* 'http://localhost:3000/prepaga';*/
                } else {

                    alert('¡Ser precavido está en usted, y Andes está para usted!');

                }
            }, 7500)
        })
        contador++;
    } while (contador <= 1)


    
    
      
            
  
    

})


// verde = #034001;  bordó = #730220  




