require('dotenv').config();
let config = {
    "dialect": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "database": process.env.DB_DATABASE,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "port": process.env.DB_PORT,
    "dialectModule": require('mysql2'),
    "pool": {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
module.exports = config;
