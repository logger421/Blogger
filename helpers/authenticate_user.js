const bcrypt = require('bcrypt');
const db = require('../helpers/queries');

async function encrypt_password(req, res, next) {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = {
            username: req.body.username,
            first_name: req.body.fname,
            last_name: req.body.lname,
            email: req.body.email,
            password: hashedPassword
        }
        await db.addUser(user.username, user.first_name, user.last_name, user.email, user.password);
        next();
    } catch {
        res.status(500).send();
    }
}

async function authenticate_password(req, res, next) {
    const [user] = await db.getUser(req.body.username);
    if(user == null) return res.status(400).send('Cannot find user');
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            req.session.isAuth = true;
            req.session.u_number = user.ID;
            next();
        } else {
            res.render('login', {title: 'Login', message: true});
        }
    } catch {
        res.status(500).send();
    }
}

module.exports = {
    encrypt_password: encrypt_password,
    authenticate_password: authenticate_password
}