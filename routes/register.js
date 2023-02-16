const express = require('express');
const router = express.Router();
const db = require('../helpers/queries');
router.get('/', function (req, res, next) {
    res.render('register', {title: 'Register', message: null});
});

router.post('/', async (req, res, next) => {
    user = {
        username: req.body.username,
        email: req.body.email,
        first_name: req.body.fname,
        last_name: req.body.lname,
        password: req.body.password,
        password2: req.body.password2
    };
    let result = await db.checkUser(user.username)
    console.log("result= " + result)
    if(result !== 1) {
        await db.addUser(user.username, user.first_name, user.last_name, user.email, user.password);
        res.redirect('/login');
    } else {
        res.render('register', {title: 'Register', message: 'Given username already taken!'})
    }
});

module.exports = router;
