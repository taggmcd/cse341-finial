// Framework goodness
const express = require('express');
const app = express();
const env = require('dotenv').config();

//Oauth
const passport = require('passport');
const session = require('express-session');
const GithubStrategy = require('passport-github2').Strategy;

// variables
const port = process.env.PORT || 3000;
const url = process.env.URL || 'localhost';
const corsHeaders = require('./middleware/cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Body parser
app.use(express.json());
// Passport
app
  .use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    })
  )
  .use(passport.initialize())
  .use(passport.session());

// Set CORS headers
app.use(corsHeaders);

// Database
const mongodb = require('./database/mongo.js');

// Routes
app.use('/', require('./routes'));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Passport
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

mongodb.init((err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running at http://${url}:${port}/api-docs`);
  });
});
