const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about-us', {title: 'About'});
});

module.exports = router;
