const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contact information',
  },
  host: 'localhost:5000', 
  schemes: ['http'], 
};

const outputFile = './swagger.json'; // File to save the generated documentation
const endpointsFiles = ['./server.js']; // Root file(s) of your API

// Generate Swagger documentation
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log('Swagger documentation generated successfully');
});