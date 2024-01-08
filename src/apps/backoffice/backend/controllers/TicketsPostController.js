const debug = require('debug')('app:controller');
const httpStatus = require('http-status');
const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");
const {BackOfficeTicketsResponse} = require("../../../../Contexts/BackOffice/Tickets/application/BackofficeTicketsResponse");

module.exports.TicketsPostController = {
    post: async (req, res) => {
        const { body } = req;
        let ticket = await MongoBackOfficeTicketRepository.create(body);
        BackOfficeTicketsResponse.created(res);
    },
}