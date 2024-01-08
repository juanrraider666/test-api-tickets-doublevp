class Criteria {
    constructor(filters, orderBy, orderType, limit, offset) {
        this.filters = filters;
        this.orderBy = orderBy;
        this.orderType = orderType;
        this.limit = limit;
        this.offset = offset;
    }


}


module.exports = { Criteria };