"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Responsible = require('../models/Responsible'); var _Responsible2 = _interopRequireDefault(_Responsible);

class ResponsibleController {

  //Store
  async store(req, res) {
    try {
      const responsibles = await _Responsible2.default.create(req.body);
      return res.status(201).json(responsibles);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const responsibles = await _Responsible2.default.findAll();
      return res.status(200).json(responsibles);
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

      const responsibles = await _Responsible2.default.findByPk(id);

      if (!responsibles) {
        return res.status(404).json({
          errors: ['This responsible does not exist to be displayed']
        })
      }

      return res.status(200).json(responsibles);
    } catch (e) {
      return res.status(404).json({
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

      const responsibles = await _Responsible2.default.findByPk(id);

      if (!responsibles) {
        return res.status(404).json({
          errors: ['This responsible does not exist to be updated']
        })
      }

      const responsiblesAtt = await responsibles.update(req.body);
      return res.json(responsiblesAtt);
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

      const responsibles = await _Responsible2.default.findByPk(id);

      if (!responsibles) {
        return res.status(404).json({
          errors: ['This responsible does not exist to be deleted']
        })
      }

      await responsibles.destroy();
      return res.status(200).json({
        message: ['Responsible successfully deleted'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ResponsibleController();
