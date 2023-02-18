const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('add-blog', {title: 'Add-blog', username: req.session.username});
});

router.post('/', function(req, res, next) {
    console.log('blog added!')
    res.render('add-blog', {title: 'Add-blog', username: req.session.username});
});

module.exports = router;
