//https://www.youtube.com/watch?v=L72fhGm1tfE
const express = require('express');
const path = require('path'); // node path module to work with files
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// Init middleware
//app.use(logger);

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home page route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API route
app.use('/api/members', require('./routes/api/members'));

// Create a route with a Get request
/*app.get('/', (req, res) => {
  //res.send('<h1>Hello World!!!</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.htML'));
});*/

const PORT = process.env.PORT || 5000; // Server look for environment variable or run on port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
