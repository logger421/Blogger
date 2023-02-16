const pool = module.require('../helpers/database');

async function getBlog(id) {
    const [blog] = await pool.query(`SELECT * FROM blogs WHERE id=?`, [id]);
    return blog[0]
}

async function getBlogs() {
    const [rows] = await pool.query(`SELECT * FROM blogs`);
    return rows
}

async function addBlog(title, content) {
    const [result] = await pool.query(`INSERT INTO blogs (title, snippet, content) values(?, ?, ?)`, [title, snippet, content]);
    return getBlog(result.insertId)
}

async function deleteBlog(id) {
    await pool.query(`DELETE * FROM blogs WHERE id=?`, [id]);
    console.log('DELETED BLOG');
}

async function getUser(username) {
    const [result] = await pool.query(`SELECT * FROM users WHERE username=?`, [username]);
    console.log('Getting user');
    if (result) return result; else return null;
}

async function checkUser(username) {
    const [result] = await pool.query(`SELECT COUNT(*) as count FROM users WHERE username=?`, [username]);
    console.log('Checking user');
    return result[0].count;
}

async function addUser(username, first_name, last_name, email, password) {
    const [result] = await pool.query(`INSERT INTO users (username, first_name, last_name, email, password) values (?, ?, ?, ?, ?)`, [username ,first_name, last_name, email, password]);
    console.log('Adding user');
    return result.insertId;
}

module.exports = {
    getBlogs: getBlogs,
    getBlog: getBlog,
    deleteBlog: deleteBlog,
    addBlog: addBlog,
    getUser: getUser,
    addUser: addUser,
    checkUser: checkUser
}