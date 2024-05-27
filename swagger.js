const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Media Tracking API',
    description:
      'A RESTful API to keep track of the movies, series, and books you are watching and reading.',
  },
  host: 'cse341-finial.onrender.com',
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
