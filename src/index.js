/* eslint-disable no-console */
const {send, json} = require('micro');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    send(res, 405);
  } else {
    try {
      const data = await json(req);
      console.log('============================');
      console.log('RECEIVED DATA');
      console.log(data);
      console.log('============================');
      send(res, 200);
    } catch (err) {
      console.log(err);
      send(res, 400);
    }
  }
};
