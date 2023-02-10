const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          allowNull: false,
          type: DataTypes.STRING(100),
        },
        lastname: {
          allowNull: false,
          type: DataTypes.STRING(100),
        },
        email: { allowNull: false, type: DataTypes.STRING(100) },
      },
      {
        sequelize,
        modelName: "user",
        timestamps: false,
      },
    );
    return User;
  }
}

module.exports = User;
