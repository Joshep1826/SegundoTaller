import  swaggerJsdoc from 'swagger-jsdoc';
/**
  * Configuración API /info
  */
const swaggerDefinition = {
  openapi : '3.0.0' ,
  info : {
    title : 'API-MONGOBD' ,
    version : '1.0.0' ,
},
servers:[
  {
    url: "http://localhost:4000/api"
  },
  {
    url: "http://localhost:3000/api"
  }
  ]
}

/**
  * Opciones
  */


const options = {
    swaggerDefinition,
    apis:[
      "./routes/*.js"
    ]

 }

 const openApiConfiguration = swaggerJsdoc(options);

 export default openApiConfiguration
