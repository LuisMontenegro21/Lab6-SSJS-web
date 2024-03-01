// swaggerDefinition.js
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API for My App',
      version: '1.0.0',
      description: 'This is a REST API application made with Express.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  };
  
  module.exports = swaggerDefinition;
  