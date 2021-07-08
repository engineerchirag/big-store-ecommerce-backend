var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var { authentication } = require('./middleware/authentication');
// var serverless = require('serverless-http');
// var router = express.Router()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  next();
});

app.use('/', homeRouter);
app.use('/user', usersRouter);
app.use('/product', authentication, indexRouter);
// app.use('/.netlify/functions/index', router);

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
  res.send({ errorMessage: err.message, status: 500 });
});

module.exports = app;
// module.exports.handler = serverless(app);
