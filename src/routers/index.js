const users = require('./user.router');
const categorys = require('./category.router');
const login = require('./login.router');
const posts = require('./post.router');

module.exports = {
  users,
  login,
  categorys,
  posts,
};