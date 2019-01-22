/* eslint-disable no-console */

'use strict';

const { PubSub } = require('@google-cloud/pubsub');

const config = require('../private/config.json');
const { PUB_SUB_TOPIC } = require('../config/server.config.js');

const pubsub = new PubSub({
  projectId: config.project_id,
});

async function getTopic(topicName) {
  const [topics] = await pubsub.getTopics();
  return topics.find(topic => topicName === topic.name.substr(topic.name.lastIndexOf('/') + 1));
}

async function postMessage(event) {
  const data = JSON.stringify(event);
  const dataBuffer = Buffer.from(data);
  const messageId = await pubsub
    .topic(PUB_SUB_TOPIC)
    .publisher()
    .publish(dataBuffer);
  return messageId;
}

module.exports = {
  getTopic,
  postMessage,
};
