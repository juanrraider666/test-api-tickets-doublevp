require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongo: {
        url: {
            doc: 'The Mongo connection URL',
            format: String,
            env:  process.env.MONGO_URL,
            name:  process.env.MONGO_DBNAME,
            default: 'mongodb://localhost:27017/mooc-backend-dev'
        }
    },
}