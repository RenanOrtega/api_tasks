"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Task extends _sequelize.Model {

  static init(sequelize) {
    super.init({
      title: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'The title field must be between 3 and 50 characters',
          },
        },
      },
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'The description field must be between 3 and 100 characters',
          },
        },
      },
      id_responsible: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
      },
      id_category: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
      },
      id_situation: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
      },
      dt_delivery: {
        type: _sequelize2.default.DATE,
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
} exports.default = Task;
