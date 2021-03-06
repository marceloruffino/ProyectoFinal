var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nuevoSH', {useNewUrlParser: true});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require ("cors");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/imagenes', express.static('imagenes'));
app.use('/imagenesConmemorativas', express.static('imagenesConmemorativas'));
app.use('/imagenesFanzine', express.static('imagenesFanzine'));
app.use('/imagenesRegistro', express.static('imagenesRegistro'));
app.use('/imagenesComics', express.static('imagenesComics'));
app.use(cors());
app.options("*", cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);


// app.use('/registro', registroRouter);



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
