var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var acercaDeRouter = require('./routes/acercaDe');
var serviciosRouter = require('./routes/servicios');
var galeriaRouter = require('./routes/galeria');
var obituariosRouter = require('./routes/obituarios')
var prepagaRouter = require('./routes/prepaga');
var dashboardRouter = require ('./routes/dashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session( { secret: 'grupo4', resave: true, saveUninitialized: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/acercaDe',acercaDeRouter);
app.use('/servicios', serviciosRouter);
app.use('/galeria',galeriaRouter);
app.use('/obituarios',obituariosRouter);
app.use('/prepaga', prepagaRouter);
app.use('/dashboard',dashboardRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
