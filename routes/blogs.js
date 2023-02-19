const express = require('express');
const db = require("../helpers/queries");
const router = express.Router();

router.get('/', async function(req, res, next) {
    const blogs = await db.getBlogs();
    res.render('blogs', {title: 'Blogs', blogs, u_number: req.session.u_number});
});

router.get('/:id', async function(req, res, next) {
    const blog = await db.getBlog(req.params.id);
    res.render('blog', {title: 'Blog', blog, u_number: req.session.u_number});
});

router.delete('/:id', async function(req, res, next) {
    await db.deleteBlog(req.params.id);
    res.status(204);
    res.send();
});

module.exports = router;
