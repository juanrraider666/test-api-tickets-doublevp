const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");
const {BackOfficeTicketsResponse} = require("../../../../Contexts/BackOffice/Tickets/application/BackofficeTicketsResponse");

module.exports.TicketsPutController = {
    put: async (req, res) => {
        const {params: {id}, body} = req;
        let ticket = await MongoBackOfficeTicketRepository.update(id, body);
        BackOfficeTicketsResponse.created(res);
    },
}