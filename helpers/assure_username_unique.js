const db = require('../helpers/queries');

async function assure_username_is_unique(req, res, next) {
    let result = await db.checkUser(req.body.username);
    if(result !== 1) {
        next();
    } else {
        res.render('register', {title: 'Register', message: 'Given username already taken!'})
    }
}

module.exports = assure_username_is_unique;