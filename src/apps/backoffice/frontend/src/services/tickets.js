const {TicketsGetController} = require("../../../backend/controllers/TicketsGetController");

const express = require('express');
const {TicketsPostController} = require("../../../backend/controllers/TicketsPostController");

const router = express.Router();

module.exports.Tickets = (app) => {
    router
        .get('/', TicketsGetController.get)
        .get('/:id', TicketsGetController.getBy)
        .post('/', TicketsPostController.post)
    ;

    app.use('/api/tickets', router);
}