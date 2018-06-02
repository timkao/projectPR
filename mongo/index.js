const conn = require('./conn');
const Customer = require('./Customer');
const seed = require('./seed')

module.exports = {
  conn,
  seed,
  collections: {
    Customer
  }
}
