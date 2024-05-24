// Framework goodness
const express = require('express');
const app = express();
const env = require('dotenv').config();


// variables
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';
const cors = require('cors');


// Body parser
app.use(express.json());

// Set CORS headers
app
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Z-key, Authorization'
  );
  res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})
.use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}))
.use(cors({origin: '*'}));

// Database
const mongodb = require('./database/mongo.js');

// Routes
app.use('/', require('./routes'));

mongodb.init((err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://${url}:${port}`);
  });
});
