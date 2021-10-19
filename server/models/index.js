const db_config = require("../config/db.config")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(db_config.DB, db_config.USERNAME, db_config.PASSWORD, {
    host: db_config.HOST,
    dialect: db_config.DIALECT,
    pool: {
        max: db_config.pool.max,
        min: db_config.pool.min,
        acquire: db_config.pool.acquire,
        idle: db_config.pool.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./student.model")(sequelize, Sequelize)

module.exports = db