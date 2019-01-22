require('dotenv').config();
const jwks = require('jwks-rsa');

module.exports = {
  PORT: process.env.PORT || 4000,
  JWT: {
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://rtt-extension.eu.auth0.com/.well-known/jwks.json',
    }),
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ['RS256'],
  },
  PUB_SUB_TOPIC: process.env.PUB_SUB_TOPIC || 'RTT-events',
};
