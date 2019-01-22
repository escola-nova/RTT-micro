/* eslint-disable no-console */

'use strict';

const { getTopic, postMessage } = require('../utils/topic');

exports.postPubSubMessage = async (req, res, next) => {
  if (req.method !== 'POST') await next();
  try {
    const topic = await getTopic('RTT-events');
    console.log(topic);
    const { nickname: username, given_name: firstname, family_name: lastname, email } = req.user;
    const event = {
      ...req.body,
      user: {
        username,
        email,
        firstname,
        lastname,
      },
    };
    // Post message to pubSub collection
    await postMessage(event);
    res.status(201).send(event);
  } catch (err) {
    console.error('The following error occurred in "postPubSubMessage": ', err);
    res.status(400).end();
  }
};
