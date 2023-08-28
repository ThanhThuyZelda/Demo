
module.exports = (sequelize, DataTypes) => {
    const Detail = sequelize.define("detail", {
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        certificate: {
            type: DataTypes.STRING
        }

    })
    return Detail
}