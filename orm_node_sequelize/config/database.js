const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('codegig', 'root', 'oracle', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = db;