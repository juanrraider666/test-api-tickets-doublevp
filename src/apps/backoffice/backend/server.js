const express = require('express');
const debug = require('debug')('app:main');
const {Config} = require('./BackendConfigReader')
const app = express();

app.use(express.json());
app.listen(Config.port, () => {
    debug('Running...')
});