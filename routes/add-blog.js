const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('add-blog');
});

module.exports = router;
