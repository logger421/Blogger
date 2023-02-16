const express = require('express');
const db = require("../helpers/queries");
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Login', message: false});
});

router.post('/', async (req, res, next) => {
    user = {
        username: req.body.username,
        password: req.body.password
    }
    let [result] = await db.getUser(user.username)
    if (!validate(result.password, user.password)) {
        res.render('login', {title: 'Login', message: true});
    } else {
        res.redirect('/home');
    }
});

function validate(password1, password2) {
    return password1 === password2;
}
module.exports = router;
