"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Task = require('../models/Task'); var _Task2 = _interopRequireDefault(_Task);
var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _Situation = require('../models/Situation'); var _Situation2 = _interopRequireDefault(_Situation);
var _Responsible = require('../models/Responsible'); var _Responsible2 = _interopRequireDefault(_Responsible);

class TaskController {

  async store(req, res) {
    try {
      const tasks = await _Task2.default.create(req.body);
      return res.status(200).json(tasks);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const tasks = await _Task2.default.findAll();
      return res.json(tasks);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is missing']
        });
      }

      const tasks = await _Task2.default.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ['This task does not exist to be displayed']
        })
      }

      return res.json(tasks);
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

      const tasks = await _Task2.default.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ['This task does not exist to be updated']
        })
      }

      const tasksAtt = await tasks.update(req.body);
      return res.json(tasksAtt);
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

      const tasks = await _Task2.default.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ['This task does not exist to be deleted']
        })
      }

      await tasks.destroy();
      return res.json({
        message: ['Task successfully deleted'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new TaskController();
