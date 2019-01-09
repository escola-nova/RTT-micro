/* eslint-disable no-console */
const {send, json} = require('micro');
const cors = require('micro-cors')();

const topic = require('./utils/topic');

const server = async (req, res) => {
  // await topic.createTopic('RTT-events');
  if (req.method !== 'POST') {
    send(res, 405);
  } else {
    try {
      console.log(process.env.type);
      const data = await json(req);
      const {id_token: uid} = req.headers;
      console.log('============================');
      console.log('RECEIVED DATA');
      console.log(uid);
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
