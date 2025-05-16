const jwt = require('jsonwebtoken');

/**
 * Creates a JWT token with an expiry time
 * @param {Object} payload - Data to be encoded in the token
 * @param {string} secret - Secret key for signing the token
 * @param {string} expiresIn - Expiration time (default: '1h')
 * @returns {string} JWT token
 */
const encrypt = (payload, secret, expiresIn = '1h') => {
  // Create a JWT with payload, secret, and expiry time
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};

module.exports = encrypt;
