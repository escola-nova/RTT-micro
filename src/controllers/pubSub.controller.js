/* eslint-disable no-console */

'use strict';

const { getTopic } = require('../utils/topic');

exports.postPubSubMessage = async (req, res, next) => {
  if (req.method !== 'POST') await next();
  try {
    const topic = await getTopic('RTT-events');
    const { id_token: uid } = req.headers;
    console.log(topic, uid);
    // Post message to pubSub collection
    res.status(201).send(req.body);
  } catch (err) {
    console.error('The following error occurred in "postPubSubMessage": ', err);
    res.status(400).end();
  }
};
