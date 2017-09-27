// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'sdashore.auth0.com', 
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:admin@ds127883.mlab.com:27883/rsvpmean'
};