const Customer = require('./Customer');

const obj1 = { name: 'tim', age: 34 };
const obj2  = { name: 'peggy', age: 41 };
const obj3 = { name: 'libian', age: 22 };


const seed = () => {
  return Customer
  .then( col => {
    col.drop();
    return Promise.all([
        col.insertOne(obj1),
        col.insertOne(obj2),
        col.insertOne(obj3)
      ])
    })
  .then( arr => {
    console.log('Mongodb seeded!');
  })
}

module.exports = seed;
