const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CONNECTION_STRING;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

function dbConnection() {
mongoose.connect(connectionString, options)
    .then(() => console.log('Mongo connection OK'))
    .catch(err => console.log(err))
}
module.exports = dbConnection;