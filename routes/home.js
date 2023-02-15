var express = require('express');
var router = express.Router();
let blogs = [{id: 1, title: "Blog1", content: "Lorem ipsum1"}, {id: 2, title: "Blog2", content: "Lorem ipsum2"}, {id: 3, title: "Blog3", content: "Lorem ipsum3"}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home', blogs: blogs});
});

module.exports = router;
