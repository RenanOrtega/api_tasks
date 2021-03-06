import Sequelize, { Model } from "sequelize";

export default class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name_category: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [4, 20],
              msg: "Category field name must be between 4 and 20 characters",
            },
          },
        },
        icon: {
          type: Sequelize.STRING,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Situation);
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}
