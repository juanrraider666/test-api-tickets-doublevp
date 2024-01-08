const express = require('express');

/* manejamos Controladores separados, para dejar abierto a migrar a ts */
const {TicketsPostController} = require("../controllers/TicketsPostController");
const {TicketsPutController} = require("../controllers/TicketsPutController");
const {TicketsDeleteController} = require("../controllers/TicketsDeleteController");
const {TicketsGetController} = require("../controllers/TicketsGetController");

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