var express = require('express');
var router = express.Router();
const db = require('../helpers/queries');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const blogs = await db.getUserBlogs(req.session.u_number);
  res.render('home', { title: 'Home', blogs: blogs, u_number: req.session.u_number});
});

router.get('/:id', async (req, res, next) => {
  const blog = await db.getBlog(req.params.id);
  res.render('blog', {title: 'Blog', blog});
});

module.exports = router;
