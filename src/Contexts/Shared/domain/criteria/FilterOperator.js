const Operator  = {
    EQUAL : '=',
    NOT_EQUAL : '!=',
    GT : '>',
    LT : '<',
    CONTAINS : 'CONTAINS',
    NOT_CONTAINS : 'NOT_CONTAINS'
}


class FilterOperator {
    constructor(value) {
        this.value = value;
    }

    static fromValue(value) {
        for (const operatorValue of Object.values(Operator)) {
            if (value === operatorValue.toString()) {
                return new FilterOperator(operatorValue);
            }
        }

        console.log(`The filter operator ${value} is invalid`);
    }

    isPositive() {
        return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS;
    }

    static equal() {
        return this.fromValue(Operator.EQUAL);
    }
}

module.exports = { FilterOperator, Operator };