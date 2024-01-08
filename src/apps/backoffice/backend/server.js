const express = require('express');
const debug = require('debug')('app:main');
const {Config} = require('./BackendConfigReader')
const {Tickets} = require("../frontend/src/services/tickets");
const {INTERNAL_SERVER_ERROR} = require("http-status");
const app = express();

app.use(express.json());

Tickets(app);
app.listen(Config.port, () => {
    debug( `Backoffice Backend App is running at http://localhost:${Config.port}`)
});

app.use((err, req, res, next) => {
    this.logger.error(err);
    res.status(INTERNAL_SERVER_ERROR).send(err.message);
});