const {TicketsGetController} = require("../../../backend/controllers/TicketsGetController");

const express = require('express');

/* manejamos Controladores separados, para dejar abierto a migrar a ts */
const {TicketsPostController} = require("../../../backend/controllers/TicketsPostController");
const {TicketsPutController} = require("../../../backend/controllers/TicketsPutController");
const {TicketsDeleteController} = require("../../../backend/controllers/TicketsDeleteController");

const router = express.Router();

module.exports.Tickets = (app) => {
    router
        .get('/', TicketsGetController.get)
        .get('/:id', TicketsGetController.getBy)
        .post('/', TicketsPostController.post)
        .put('/:id', TicketsPutController.put)
        .delete('/:id', TicketsDeleteController.delete)
    ;

    app.use('/api/tickets', router);
}