const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Media Tracking API',
    description:
      'A RESTful API too keept track of the movies, series, and books you are watching and reading.',
  },
  host: 'https://localhost:3000',
  schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
