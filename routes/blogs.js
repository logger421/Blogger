const express = require('express');
const db = require("../helpers/queries");
const router = express.Router();

router.get('/', async function(req, res, next) {
    const blogs = await db.getBlogs();
    console.log(blogs);
    res.render('blogs', {title: 'Blogs', blogs});
});

router.get('/:id', async function(req, res, next) {
    const blog = await db.getBlog(req.params.id);
    res.render('blog', {title: 'Blog', blog});
});

module.exports = router;
