const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      console.log('token not present');
      return req;
    }
    console.log('token present', token);
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('verify', data);
      return { user: data };
    } catch (err) {
      console.error(err);
      console.log('Invalid token');
      throw new AuthenticationError('Invalid token!');
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};