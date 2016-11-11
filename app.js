var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var engine = require('consolidate');

var appRoutes = require('./routes/appRoutes');
var userRoutes = require('./routes/users');
var employeeRoutes = require('./routes/employees');

var app = express();

//set up seed data
if(app.get('env')==='development'){
  var setupController = require('./controllers/setupController');
  setupController(app);
}
//---//


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engine.handlebars);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//setting headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoose connection
mongoose.connect('thedaruma:test123@ds145677.mlab.com:45677/directory');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

//routes
app.use('/', appRoutes);
app.use('/users-api', userRoutes);
app.use('/employees-api', employeeRoutes);

db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log("We're connected to Mongo DB!");
});

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname,'views/index.html'))
})

// app.use(function(req, res, next) {
//   res.render('index');
// });

module.exports = app;
