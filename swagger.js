const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Media Tracking API',
    description:
      "A RESTful API to keep track of the movies, series, and books you are watching and reading.\n<a href='https://cse341-finial.onrender.com/login' target='_blank'>Login With GitHub<a>\n<a href='https://cse341-finial.onrender.com/logout' target='_blank'>Log Out<a>",
  },
  host: 'cse341-finial.onrender.com',
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
