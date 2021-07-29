//email store as string null=false
//password store as string null=false



module.exports = function (sequelize, DataTypes){

    const User = sequelize.define("user", {

        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return User;
};