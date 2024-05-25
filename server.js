// Framework goodness
const express = require('express');
const app = express();
const env = require('dotenv').config();

// variables
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';
const corsHeaders = require('./middleware/cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Body parser
app.use(express.json());

// Set CORS headers
app.use(corsHeaders);

// Database
const mongodb = require('./database/mongo.js');

// Routes
app.use('/', require('./routes'));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongodb.init((err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://${url}:${port}`);
  });
});
