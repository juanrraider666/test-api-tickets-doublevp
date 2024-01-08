const {Config} = require("../../../../../apps/backoffice/backend/BackendConfigReader");
const {MongoRepository} = require("../../../../Shared/Infrastructure/persistence/mongo/MongoRepository");
const { ObjectId } = require("mongodb");

const searchAll = async () => new Promise(async (resolve, reject) => {
    const collection = await MongoRepository.collection();
    const documents = await collection.find({}, {}).toArray();
    console.log(documents)
})

const search = async (id) => new Promise(async (resolve, reject) => {
    const collection = await MongoRepository.collection();
    const query = { _id: new ObjectId(id) };
    return await collection.findOne(query);
})

const create = async (ticket) => new Promise(async (resolve, reject) => {
    const collection = await MongoRepository.collection();
    return await collection.insertOne(ticket);
})


module.exports.MongoBackOfficeTicketRepository = {
    searchAll,
    create,
    search,
}