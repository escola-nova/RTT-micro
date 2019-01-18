/* eslint-disable no-console */

'use strict';

const express = require('express');
const cors = require('cors')();

const bodyParser = express.json();
const app = express();

const { PORT } = require('./config/server.config');
const jwtMidd = require('./middlewares/jwt');
const { postPubSubMessage } = require('./controllers');

app.post('/', cors, jwtMidd, bodyParser, postPubSubMessage);

app.use('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
