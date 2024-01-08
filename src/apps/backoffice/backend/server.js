const express = require('express');
const debug = require('debug')('app:main');
const {Config} = require('./BackendConfigReader')
const {Tickets} = require("../frontend/src/services/tickets");
const app = express();

app.use(express.json());

Tickets(app);
app.listen(Config.port, () => {
    debug('Running...')
});