/* eslint-disable no-console */

'use strict';

const express = require('express');
const cors = require('cors')();

const bodyParser = express.json();
const app = express();

const PORT = require('./config/server.config').PORT || 3000;
const { postPubSubMessage } = require('./controllers');

app.post('/', cors, bodyParser, postPubSubMessage);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
