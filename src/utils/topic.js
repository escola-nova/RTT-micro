'use strict';

const {PubSub} = require('@google-cloud/pubsub');

const pubsub = new PubSub();

async function createTopic(topicName) {
  const topic = await getTopic(topicName);
  console.log(topic);
  return topic;
  // await pubsub.createTopic(topicName);
}

async function getTopic(topicName) {
  const [topics] = await pubsub.getTopics();
  return topics.find(topic => topicName === topic.name);
}

module.exports = {
  createTopic,
  getTopic,
};
