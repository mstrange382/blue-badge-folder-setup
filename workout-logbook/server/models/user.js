module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('user',{
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        }
        })
    return Workout;
};