const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API USJT',
      version: '1.0.0',
      description: 'API criado como projeto para a USJT',
    },
    servers: [
      {
        url: 'http://localhost:3005/',
        description: 'Dev server',
      },
    ],
    security: [{
      BearerAuth: [],
    }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = specs;