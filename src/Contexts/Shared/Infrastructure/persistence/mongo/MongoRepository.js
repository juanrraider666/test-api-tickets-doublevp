const {Database} = require("./mongoConfig");

module.exports.MongoRepository = {
    collection: async () => {
        return (await Database('backoffice_tickets'));
    },

    searchByCriteria: async () => {

    }
}