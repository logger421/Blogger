const session = require('express-session');
const mysql2 = require('mysql2/promise');
const MySQLStore = require('express-mysql-session')(session);
const dotenv = require('dotenv').config();

const options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogger_sessions'
};

const connection = mysql2.createPool(options);
const sessionStore = new MySQLStore({}, connection);

module.exports = sessionStore;