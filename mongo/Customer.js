const conn = require('./conn');

module.exports = conn
  .then( db => {
    let dbo = db.db('mydb');
    console.log('collection created');
    return dbo.createCollection('customer')
  })
  .catch(err => {
    console.log(err);
  })

