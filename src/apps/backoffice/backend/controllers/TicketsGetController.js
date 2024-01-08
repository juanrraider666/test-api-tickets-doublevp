const debug = require('debug')('app:controller');
const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");


module.exports.TicketsGetController = {
    get: () => {
        let tickets = MongoBackOfficeTicketRepository.searchAll();
        debug(tickets);
    },
    getBy: async (req, res) => {
        const {params: {id}} = req;

        let tickets = await MongoBackOfficeTicketRepository.search(id);
        debug(tickets);
    },
}