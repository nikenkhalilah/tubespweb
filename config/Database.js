const { Sequelize } = require("sequelize");

const db = new Sequelize('login_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;
