const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");
const {BackOfficeTicketsResponse} = require("../../../../Contexts/BackOffice/Tickets/application/BackofficeTicketsResponse");

module.exports.TicketsDeleteController = {
    delete: async (req, res) => {
        const {params: {id}} = req;
        let deleted = await MongoBackOfficeTicketRepository.remove(id);
        BackOfficeTicketsResponse.success(res);
    },
}