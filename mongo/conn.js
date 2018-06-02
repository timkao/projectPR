let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";
const conn = MongoClient.connect(url);

module.exports = conn;

