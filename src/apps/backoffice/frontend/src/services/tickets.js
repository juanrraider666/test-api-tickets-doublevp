const {TicketsGetController} = require("../../../backend/controllers/TicketsGetController");

const express = require('express');
const {TicketsPostController} = require("../../../backend/controllers/TicketsPostController");
const {TicketsPutController} = require("../../../backend/controllers/TicketsPutController");

const router = express.Router();

module.exports.Tickets = (app) => {
    router
        .get('/', TicketsGetController.get)
        .get('/:id', TicketsGetController.getBy)
        .post('/', TicketsPostController.post)
        .put('/:id', TicketsPutController.put)
    ;

    app.use('/api/tickets', router);
}