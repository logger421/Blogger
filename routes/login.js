const express = require('express');
const router = express.Router();

/*TODO Upgrade login system to database persistent*/
let users = [
    {
        login: "admin",
        password: "admin123"
    },
    {
        login: "user1",
        password: "user123"
    }];

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Login', message: false});
});

router.post('/', async (req, res, next) => {
    user = {
        login: req.body.username,
        password: req.body.password
    }
    console.log(users.includes(user))
    if (users.includes(user)) {
        res.redirect('/home');
    } else {
        res.render('login', {title: 'Login', message: true});
    }
});
module.exports = router;
