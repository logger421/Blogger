const {checkBlogTitle} = require('../helpers/queries');

async function assure_title_unique(req, res, next) {
    let result = await checkBlogTitle(req.body.title);
    if(result !== 1) {
        next();
    } else {
        res.render('add-blog', {title: 'Add-blog', message: 'Blog with this title already exits!', username: req.session.username});
    }
}

module.exports = assure_title_unique;