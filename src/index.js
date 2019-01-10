/* eslint-disable no-console */

'use strict';

const {send, json} = require('micro');
const cors = require('micro-cors')();

require('./utils/topic').createTopic('RTT-events');
const {getTopic} = require('./utils/topic');

const server = async (req, res) => {
  if (req.method !== 'POST') {
    send(res, 405);
  } else {
    try {
      const topic = await getTopic('RTT-events');
      console.log('TOPIC NAME', topic.name);
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
