const Sequelize = require("sequelize");
const conn = require("./conn");

const Team = conn.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Team;
