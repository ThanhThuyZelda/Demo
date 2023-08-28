
module.exports = (sequelize, DataTypes) => {
    const JobSeeker = sequelize.define("jobseeker", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        }

    })
    return JobSeeker
}