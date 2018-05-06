const conn = require('./conn');
const Team = require('./Team');

const sync = () => {
  return conn.sync({force: true});
}

module.exports = {
  sync,
  models: {
    Team
  }
}
