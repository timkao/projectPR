const conn = require('./conn');
const { Team } = require('./index').models;

const seed = () => {
  return Promise.all([
    Team.create({name: 'Avengers', description: 'need to watch it'}),
    Team.create({name: 'justice league', description: 'not bad'})
  ])
  .then(([avenger, justice]) => {
    console.log('seeded!');
  })
}

module.exports = seed;
