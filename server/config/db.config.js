module.exports = {
    HOST: "localhost",
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    DIALECT: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}