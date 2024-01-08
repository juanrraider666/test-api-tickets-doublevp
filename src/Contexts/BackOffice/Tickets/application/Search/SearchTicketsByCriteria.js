class SearchTicketsByCriteria {
    constructor(filters, orderBy, orderType, limit, offset) {
        this.filters = filters;
        this.orderBy = orderBy;
        this.orderType = orderType;
        this.limit = limit;
        this.offset = offset;
    }

    hasFilters() {
        return this.filters.length > 0;
    }
}


module.exports = { SearchTicketsByCriteria };