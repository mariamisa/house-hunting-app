const signupController = require('./signup');
const logoutController = require('./logout');
const loginController = require('./login');
const getUser = require('./getUser');
const authController = require('./isAuth');
const getUserHousesController = require('./getUserHouses');

module.exports = {
  signupController,
  loginController,
  logoutController,
  getUser,
  authController,
  getUserHousesController,
};
