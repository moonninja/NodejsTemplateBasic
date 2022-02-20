const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Routes = require('./routes/Routes');


// const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
// const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => app.listen(3000))
//   .catch(err => console.log(err));

// listen for requests
app.listen(3000);


// register view engine
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
// home routes
app.use('/', Routes);
// app.get('/', (req, res) => {
  //     res.render('home/index', { dummy : 'home'});
  // });
  //test routes
  app.use('/test', Routes);
// app.get('/test', (req, res) => {
//     res.render('test/index', { dummy : 'test'});
// });


// // blog routes
// app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('error/404', { title: '404' });
});