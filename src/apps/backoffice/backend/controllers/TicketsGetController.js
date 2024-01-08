const debug = require('debug')('app:controller');
const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");
const {BackOfficeTicketsResponse} = require("../../../../Contexts/BackOffice/Tickets/application/BackofficeTicketsResponse");


module.exports.TicketsGetController = {
    get: async (req, res) => {
        const tickets = MongoBackOfficeTicketRepository.searchAll();
        BackOfficeTicketsResponse.success(res, 200, 'Success', tickets)
    },
    getBy: async (req, res) => {
        const {params: {id}} = req;
        const ticket = await MongoBackOfficeTicketRepository.search(id);
        BackOfficeTicketsResponse.success(res, 200, 'Success', ticket)
    },
}