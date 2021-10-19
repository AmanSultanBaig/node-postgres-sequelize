module.exports = (sequelize, Sequelize) => {
    const StudentSchema = sequelize.define("students", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return StudentSchema
}