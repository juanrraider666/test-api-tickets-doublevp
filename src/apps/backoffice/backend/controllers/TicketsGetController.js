const debug = require('debug')('app:controller');
const {MongoBackOfficeTicketRepository} = require("../../../../Contexts/BackOffice/Tickets/infrastructure/persistence/MongoBackOfficeTicketRepository");
const {BackOfficeTicketsResponse} = require("../../../../Contexts/BackOffice/Tickets/application/BackofficeTicketsResponse");
const {
    SearchTicketsByCriteria
} = require('../../../../Contexts/Backoffice/Tickets/application/Search/SearchTicketsByCriteria');

module.exports.TicketsGetController = {
    get: async (req, res) => {
        const {query: queryParams} = req;
        const {filters = null, orderBy = 'desc', order = null, limit = null, offset = null} = queryParams;

        /* Criteria pattern*/
        const query = new SearchTicketsByCriteria(
            parseFilters(filters),
            orderBy,
            order,
            limit ? Number(limit) : undefined,
            offset ? Number(offset) : undefined
        );

        let tickets = await MongoBackOfficeTicketRepository.searchAll(query);
        BackOfficeTicketsResponse.success(res, 200, 'Success', tickets)
    },
    getBy: async (req, res) => {
        const {params: {id}} = req;
        const ticket = await MongoBackOfficeTicketRepository.search(id);
        BackOfficeTicketsResponse.success(res, 200, 'Success', ticket)
    },
}


const parseFilters = (params) => {

    if (!params) {
        return new Array();
    }

    return JSON.parse(params).map(filter => {
        const field = filter.field;
        const value = filter.value;
        const operator = filter.operator;

        return new Map([
            ['field', field],
            ['operator', operator],
            ['value', value]
        ]);
    });
}