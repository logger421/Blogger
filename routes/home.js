var express = require('express');
var router = express.Router();
const db = require('../helpers/queries');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const blogs = await db.getBlogs();
  res.render('home', { title: 'Home', blogs: blogs});
});

module.exports = router;
