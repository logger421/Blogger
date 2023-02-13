const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var blogsRouter = require('./routes/blogs');
var addBlogRouter = require('./routes/add-blog');
var aboutRouter = require('./routes/about');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/blogs', blogsRouter);
app.use('/add-blog', addBlogRouter);
app.use('/about', aboutRouter);

// TODO: give access to home page only to logged people, redirect rest to login page.
app.get('/*', function (req, res) {
    res.redirect('/home');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
