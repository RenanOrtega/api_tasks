import Sequelize, { Model } from 'sequelize';

export default class Task extends Model {

  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'The title field must be between 3 and 50 characters',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'The description field must be between 3 and 100 characters',
          },
        },
      },
      id_responsible: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate:{
          msg: 'Responsible does not exist',
        },
      },
      id_category: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      id_situation: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      dt_delivery: {
        type: Sequelize.DATE,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Responsible, { foreignKey: 'id_responsible' });
    this.belongsTo(models.Situation, { foreignKey: 'id_situation' });
    this.belongsTo(models.Category, { foreignKey: 'id_category' });
  }
}
