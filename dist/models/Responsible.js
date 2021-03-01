"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Responsible extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name_responsible: {
        type: _sequelize2.default.STRING,
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

} exports.default = Responsible;
