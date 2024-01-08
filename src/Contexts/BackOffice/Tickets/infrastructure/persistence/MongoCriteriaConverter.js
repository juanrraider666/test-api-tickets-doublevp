const {Operator} = require("../../../../Shared/domain/criteria/FilterOperator");

class MongoCriteriaConverter {
    constructor() {
        this.filterTransformers = new Map([
            [Operator.EQUAL, this.equalFilter],
            [Operator.NOT_EQUAL, this.notEqualFilter],
            [Operator.GT, this.greaterThanFilter],
            [Operator.LT, this.lowerThanFilter],
            [Operator.CONTAINS, this.containsFilter],
            [Operator.NOT_CONTAINS, this.notContainsFilter]
        ]);
    }

    convert(criteria) {
        return {
            filter: criteria.hasFilters() ? this.generateFilter(criteria.filters) : {},
            skip: criteria.offset || 0,
            limit: criteria.limit || 0
        };
    }

    generateFilter(filters) {
        const filter = Array.from(filters).map((filter) => {
            let operator = filter.get('operator');
            const transformer = this.filterTransformers.get(operator);

            if (!transformer) {
                throw Error(`Unexpected operator value ${operator}`);
            }

            return transformer(filter);
        });

        return Object.assign({}, ...filter);
    }

    equalFilter(filter) {
        return {[filter.get('field')]: {$eq: filter.get('value')}};
    }

    notEqualFilter(filter) {
        return {[filter.get('field')]: {$ne: filter.get('value')}};
    }

    greaterThanFilter(filter) {
        return {[filter.get('field')]: {$gt: filter.get('value')}};
    }

    lowerThanFilter(filter) {
        return {[filter.get('field')]: {$lt: filter.get('value')}};
    }

    containsFilter(filter) {
        return {[filter.get('field')]: {$regex: filter.get('value')}};
    }

    notContainsFilter(filter) {
        return {[filter.get('field')]: {$not: {$regex: filter.get('value')}}};
    }
}

module.exports = {MongoCriteriaConverter};