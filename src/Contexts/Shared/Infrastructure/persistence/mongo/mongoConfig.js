const { MongoClient } = require('mongodb')
const debug = require('debug')('app:db')
const {Config} = require('./../../../../../apps/backoffice/backend/BackendConfigReader')
class MongoConfig {
    static clients = {};

    static async createAndConnectClient() {
        const client = new MongoClient(Config.mongo.url.env, { ignoreUndefined: true });

        await client.connect();

        return client;
    }

    static async getClient() {
        return this.clients["shared"] ?? null;
    }

    static async registerClient(context, client)  {
        this.clients[context] = client;
    }

    async createClient() {
        let client = await MongoConfig.getClient();

        if (!client) {

            client = await MongoConfig.createAndConnectClient();

            MongoConfig.registerClient('shared', client);
        }

        return client;
    }


}

module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    let config= new MongoConfig();
    let client = await config.createClient();

    try {
        const db = client.db(Config.mongo.url.name);
        debug('Connection is Running');
        resolve(db.collection(collection))
    }catch (error) {
        reject(error)
    }
})
