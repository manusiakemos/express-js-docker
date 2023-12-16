'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const configDB = require(__dirname + '/../config/database.js');
const db = {};

let sequelize;
if (configDB) {
  console.log(configDB);
  sequelize = new Sequelize(configDB);
}

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.');
}).catch (error =>{
  console.error('Unable to connect to the database');
  console.error(error);
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
