const express = require('express');
const debug = require('debug')('app:main');
const {Config} = require('./apps/backoffice/backend/BackendConfigReader')
const {INTERNAL_SERVER_ERROR} = require("http-status");
const {Tickets} = require("./apps/backoffice/backend/routes/tickers.route");
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