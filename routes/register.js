const express = require('express');
const router = express.Router();
const db = require('../helpers/queries');
const authenticate = require('../helpers/authenticate_user');
const assure_username_unique = require('../helpers/assure_username_unique');

router.get('/', function (req, res, next) {
    res.render('register', {title: 'Register', message: null});
});

router.post('/', assure_username_unique, authenticate.encrypt_password, async (req, res, next) => {
    res.redirect('/login');
});

module.exports = router;
