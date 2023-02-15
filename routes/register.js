const express = require('express');
const router = express.Router();

let users = []
router.get('/', function (req, res, next) {
    res.render('register', {title: 'Register'});
});

router.post('/', async (req, res, next) => {
    user = {
        username: req.body.username,
        email: req.body.email,
        first_name: req.body.fname,
        last_name: req.body.lname,
        password: req.body.password
    };
    users.push(user);
    res.redirect('/register');
});

module.exports = router;
