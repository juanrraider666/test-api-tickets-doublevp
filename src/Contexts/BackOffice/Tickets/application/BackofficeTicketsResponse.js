const httpStatus = require("http-status");

module.exports.BackOfficeTicketsResponse = {
    created: (res) => {
        res.status(httpStatus.CREATED).send();
    },
    success: (res, status = 200, message = "Ok", body = {}) => {
        res.status(httpStatus.OK).send(body)/*.join({message, body}).send(res);*/
    },
    error: (res, error = null) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
}