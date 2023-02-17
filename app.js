const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const sessionStore = require('./helpers/session_store');
const isAuth = require('./helpers/authorize_user')

const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const blogsRouter = require('./routes/blogs');
const addBlogRouter = require('./routes/add-blog');
const aboutRouter = require('./routes/about');
const logoutRouter = require('./routes/logout');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-session',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/home', isAuth, homeRouter);
app.use('/blogs', isAuth, blogsRouter);
app.use('/add-blog', isAuth, addBlogRouter);
app.use('/about', isAuth, aboutRouter);
app.use('/logout', isAuth, logoutRouter);

// // TODO: give access to home page only to logged people, redirect rest to login page.
app.get('/', function (req, res) {
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
