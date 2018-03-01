const mongodb = require("../initializations/mongodb");
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

module.exports = {
    create: create,
    update: update,
    deleteEntry: deleteEntry,
    readById: readById,
    readAll: readAll
};

function create(model) {
    return conn.db().collection('characters').insertOne(model)
        .then(result => result.insertedId.toString())
};

function update() { 
    
};

function deleteEntry() {
    
};

function readById() {
    
};

function readAll() {
    return conn.db().collection('characters').find()
        .map(result => {
            result._id = result._id.toString();
            return result;
        })
        .toArray();
    ;
};