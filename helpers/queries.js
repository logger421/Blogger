const pool = module.require('../helpers/database');

async function checkBlogTitle(title) {
    const [result] = await pool.query(`SELECT COUNT(*) as count FROM blogs WHERE title=?`, [title]);
    console.log('Checking blog title');
    return result[0].count;
}

async function getBlog(id) {
    const [blog] = await pool.query(`SELECT * FROM blogs WHERE id=?`, [id]);
    return blog[0]
}

async function getBlogs() {
    const [rows] = await pool.query(`SELECT * FROM blogs ORDER BY ID DESC`);
    return rows
}

async function getUserBlogs(user_id) {
    const [rows] = await pool.query(`SELECT * FROM blogs WHERE created_by=? ORDER BY ID DESC`, [user_id]);
    return rows
}

async function addBlog(title, content, created_by) {
    const [result] = await pool.query(`INSERT INTO blogs (title, content, created_by) values(?, ?, ?)`, [title, content, created_by]);
    return getBlog(result.insertId)
}

async function deleteBlog(id) {
    const [result] = await pool.query(`DELETE FROM blogs WHERE ID=?`, [id]);
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
    checkUser: checkUser,
    getUserBlogs: getUserBlogs,
    checkBlogTitle: checkBlogTitle
}