const jwt = require('express-jwt');
const { JWT } = require('../config/server.config');

module.exports = jwt(JWT);
