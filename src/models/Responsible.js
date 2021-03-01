import Sequelize, { Model } from 'sequelize';

export default class Responsible extends Model {
  static init(sequelize) {
    super.init({
      name_responsible: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 50],
            msg: 'Responsible field name must be between 4 and 50 characters',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

}
