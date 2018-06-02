const conn = require('./conn');
const { Team } = require('./index').models;

const seed = () => {
  return Promise.all([
    Team.create({name: 'Avengers', description: 'need to watch it'}),
    Team.create({name: 'Justice League', description: 'not bad'}),
    Team.create({name: 'Fantastic Four', description: 'just four'}),
    Team.create({name: 'X-Men', description: 'where is Logan?'}),
    Team.create({name: 'Suicide Squad', description: 'where is Logan?'})
  ])
  .then(() => {
    console.log('postgres seeded!');
  })
}

module.exports = seed;
