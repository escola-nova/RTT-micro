/* eslint-disable no-console */

'use strict';

const { PubSub } = require('@google-cloud/pubsub');

const config = require('../private/config.json');

const pubsub = new PubSub({
  projectId: config.project_id,
});

async function getTopic(topicName) {
  const [topics] = await pubsub.getTopics();
  return topics.find(topic => topicName === topic.name.substr(topic.name.lastIndexOf('/') + 1));
}

module.exports = {
  getTopic,
};
