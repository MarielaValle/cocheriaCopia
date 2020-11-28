module.exports = (sequelize, dataTypes) =>{
    let alias ='Obituario';
  
    let cols={
  
   
          id:{
  
              primaryKey:true,
              autoIncrement:true,
              allowNull:false,
              type:dataTypes.INTEGER
  
              },
           nombre:{
              type:dataTypes.STRING(100)
  
            },          
  
             apellido:{
              
              type:dataTypes.STRING(100)
              },
  
            
             fecha:{
             
                type:dataTypes.DATE
             },
          
           
           imagen: {
              type:dataTypes.STRING(100)
  
            },
      
    }
      let config= {
          tableName: "obituarios",
          timestamps: false
      }
      const Obituario = sequelize.define(alias,cols,config);
          
      
  
      return Obituario;
  
  }