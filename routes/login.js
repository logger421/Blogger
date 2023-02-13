const express = require('express');
const router = express.Router();

/*TODO Upgrade login system to database persistent*/
let users = [];

router.get('/', function(req, res, next) {
    res.render('login', {title: 'Login'});
});

router.post('/', async (req, res, next) => {
    user = {
        login: req.body.username,
        password: req.body.password
    }
    users.push(user);
    console.log(users);
    res.redirect('/home');
});
module.exports = router;
