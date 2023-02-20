const express = require('express');
const router = express.Router();
const assure_title_unique = require('../helpers/assure_title_unique');
const db = require('../helpers/queries');
router.get('/', function(req, res, next) {
    res.render('add-blog', {title: 'Add-blog', message: null, username: req.session.username});
});

router.post('/', assure_title_unique,async function(req, res, next) {
    let id = await db.addBlog(req.body.title, req.body.content, req.session.u_number);
    console.log('blog added!')
    // res.render('add-blog', {title: 'Add-blog', username: req.session.username});
    res.redirect('/home');
});

module.exports = router;
