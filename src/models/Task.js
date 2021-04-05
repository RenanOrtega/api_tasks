import Sequelize, { Model } from "sequelize";

export default class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "The title field must be between 3 and 50 characters",
            },
          },
        },
        description: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "The description field must be between 3 and 100 characters",
            },
          },
        },
        situation_id: {
          type: Sequelize.INTEGER,
        },
        due_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Situation, { foreignKey: "situation_id" });
  }
}
