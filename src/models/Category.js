import Sequelize, { Model } from 'sequelize';

export default class Category extends Model {
  static init(sequelize) {
    super.init({
      name_category: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 20],
            msg: 'Category field name must be between 4 and 20 characters',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

}
