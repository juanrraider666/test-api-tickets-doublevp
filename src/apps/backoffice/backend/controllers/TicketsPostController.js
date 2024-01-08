const debug = require('debug')('app:controller');
const httpStatus = require('http-status');
const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");


module.exports.TicketsPostController = {
    post: async (req, res) => {
        const { body } = req;
        console.log(body)
        let ticket = await MongoBackOfficeTicketRepository.create(body);
        return httpStatus.OK;
    },
}