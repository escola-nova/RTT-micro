/* eslint-disable no-console */

'use strict';

const { PubSub } = require('@google-cloud/pubsub');

const config = require('../private/config.json');

const pubsub = new PubSub({
  projectId: config.project_id,
});

async function createTopic(topicName) {
  const topic = await getTopic(topicName);
  if (!topic) {
    try {
      const newTopic = await pubsub.createTopic(topicName);
      console.log('Topic created: ', newTopic);
    } catch (err) {
      console.log(err);
    }
  }
}

async function getTopic(topicName) {
  const [topics] = await pubsub.getTopics();
  return topics.find(topic => topicName === topic.name.substr(topic.name.lastIndexOf('/') + 1));
}

module.exports = {
  createTopic,
  getTopic,
};
