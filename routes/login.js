const express = require('express');
const db = require("../helpers/queries");
const router = express.Router();
const authenticate = require('../helpers/authenticate_user');

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Login', message: false});
});

router.post('/', authenticate.authenticate_password, async (req, res, next) => {
    req.session.isAuth = true;
    res.redirect('/home');
});

module.exports = router;
