const {Config} = require("../../../../../apps/backoffice/backend/BackendConfigReader");
const {MongoRepository} = require("../../../../Shared/Infrastructure/persistence/mongo/MongoRepository");
const { ObjectId } = require("mongodb");

const searchAll = async () => {
    const collection = await MongoRepository.collection();
    return await collection.find({}, {}).toArray();
}

const search = async (id) => {
    const collection = await MongoRepository.collection();
    const query = { _id: new ObjectId(id) };
    return await collection.findOne(query);
}

const create = async (ticket) => {
    const collection = await MongoRepository.collection();
    ticket.createdAt = new Date();
    return await collection.insertOne(ticket);
}

const update = async (id, ticket) => {
    const collection = await MongoRepository.collection();
    ticket.updatedAt = new Date();
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: ticket }, { upsert: true });
}


module.exports.MongoBackOfficeTicketRepository = {
    searchAll,
    create,
    update,
    search,
}