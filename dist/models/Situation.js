"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Situation extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name_situation: {
        type: _sequelize2.default.STRING,
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

} exports.default = Situation;
