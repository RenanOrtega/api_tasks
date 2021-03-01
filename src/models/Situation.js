import Sequelize, { Model } from 'sequelize';

export default class Situation extends Model {
  static init(sequelize) {
    super.init({
      name_situation: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 18],
            msg: 'Situation field name must be between 2 and 18 characters',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

}
