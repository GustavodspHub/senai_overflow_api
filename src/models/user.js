const { Model } = require("sequelize");

class User extends Model {
    static init(connection){

    };

    static init(models){
        super.init(
            {
                name: DataTypes.STRING,
                emal: DataTypes.STRING,
                password: DataTypes.STRING,

            },
            {
                sequelize: connection,
            }
        )
    };

    static associate (models){
        this.hasMany(models.post)
    }
}

module.exports = User;