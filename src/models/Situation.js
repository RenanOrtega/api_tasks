import Sequelize, { Model } from "sequelize";

export default class Situation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 18],
              msg: "Situation field name must be between 2 and 18 characters",
            },
          },
        },
        category_id: {
          type: Sequelize.INTEGER,
        },
        icon: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: "category_id" });
    this.hasMany(models.Task);
  }
}
