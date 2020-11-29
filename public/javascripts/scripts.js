window.addEventListener("load", function(){
    
    const delay=3000;
    
    setTimeout (miFuncion, delay);
    
    function miFuncion(){
        if(sessionStorage.getItem('visitante')==null) {
            
            
            let nombre=prompt('Hola! ¿cuál es tu nombre?')
            
            let bienvenido = document.querySelector('.bienvenido');  
            
            if(nombre==null){
                nombre = 'bienvenid@'
            }
            
            bienvenido.innerHTML = '¡Hola, '+ nombre + '!';
            
            sessionStorage.setItem('visitante',nombre)
            
        }else {
            nombre=sessionStorage.getItem('visitante')
            document.querySelector('.bienvenido').innerHTML = '¡Hola ' + nombre +'!';
            
        }
        
        //sessionStorage.clear();
        
        console.log(sessionStorage);
        
    }
    
    
    //------------------------
    let menuLink = document.querySelectorAll("#menuLink ul li a i");
    
    console.log(menuLink)
    
    
    
    for (let i=0; i < menuLink.length; i ++){
        //menuLink.onmouseover=function(){
        
        menuLink[i].addEventListener("mouseover", function(){              
            
                this.style.fontSize="2em"
                this.style.color= "#9dc3e1"
           
                
                //menuLink.onmouseover=function(){        
            
        });
        
        menuLink[i].addEventListener("mouseout", function(){              
            
            this.style.fontSize="1.5em"
            this.style.color= "#d98e04"
       
            
            //menuLink.onmouseover=function(){        
        
    });
        
    }
    
})


// verde = #034001;  bordó = #730220  




