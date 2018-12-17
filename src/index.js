/* eslint-disable no-console */
const {send, json} = require('micro');
const cors = require('micro-cors')();

const server = async (req, res) => {
  if (req.method !== 'POST') {
    send(res, 405);
  } else {
    try {
      const data = await json(req);
      console.log('============================');
      console.log('RECEIVED DATA');
      console.log(data);
      console.log('============================');
      send(res, 200, data);
    } catch (err) {
      console.log(err);
      send(res, 400);
    }
  }
};

module.exports = cors(server);
