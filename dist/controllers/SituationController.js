"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Situation = require('../models/Situation'); var _Situation2 = _interopRequireDefault(_Situation);

class SituationController {
  async store(req, res) {
    try {
      const situations = await _Situation2.default.create(req.body);
      return res.status(201).json(situations);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const situations = await _Situation2.default.findAll();
      return res.status(200).json(situations);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Show
  async show(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
          return res.status(400).json({
            errors: ['ID is missing']
          });
        }

        const situations = await _Situation2.default.findByPk(id);

        if (!situations) {
          return res.status(404).json({
            errors: ['This situation does not exist to be displayed']
          })
        }
      return res.status(200).json(situations);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

        if (!id) {
          return res.status(400).json({
            errors: ['ID is missing']
          });
        }

        const situations = await _Situation2.default.findByPk(id);

        if (!situations) {
          return res.status(404).json({
            errors: ['This situation does not exist to be updated']
          })
        }

      const situationsAtt = await situations.update(req.body);
      return res.json(situationsAtt);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

        if (!id) {
          return res.status(400).json({
            errors: ['ID is missing']
          });
        }

        const situations = await _Situation2.default.findByPk(id);

        if (!situations) {
          return res.status(404).json({
            errors: ['This situation does not exist to be deleted']
          })
        }

      await situations.destroy();
      return res.status(200).json({
        message: ['Situation successfully deleted'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new SituationController();
