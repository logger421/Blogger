const express = require('express');
const router = express.Router();
const db = require('../helpers/queries');
router.get('/', function(req, res, next) {
    res.render('add-blog', {title: 'Add-blog', username: req.session.username});
});

router.post('/', async function(req, res, next) {
    let id = await db.addBlog(req.body.title, req.body.content, req.session.u_number);
    console.log('blog added!')
    res.render('add-blog', {title: 'Add-blog', username: req.session.username});
});

module.exports = router;
