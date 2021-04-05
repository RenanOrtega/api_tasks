import Task from "../models/Task";

class TaskController {
  async store(req, res) {
    try {
      if (!req.body.situation_id) {
        return res.status(400).json({
          errors: ["Situation ID is missing"],
        });
      }

      const tasks = await Task.create(req.body);
      return res.status(200).json(tasks);
    } catch (e) {
      console.error(e);

      // return res.status(404).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
  }

  // Index
  async index(req, res) {
    try {
      const { page, pageSize, situation_id } = req.query;

      if (!situation_id) {
        return res.status(400).json({
          errors: ["Situation ID is missing"],
        });
      }

      const tasks = await Task.findAll({
        offset: page ? page * pageSize : 0,
        limit: pageSize ? +pageSize : 5,
        where: { situation_id },
      });

      return res.json(tasks);
    } catch (e) {
      console.error(e);
      // return res.status(404).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["ID is missing"],
        });
      }

      const tasks = await Task.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ["This task does not exist to be displayed"],
        });
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
          errors: ["ID is missing"],
        });
      }

      const tasks = await Task.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ["This task does not exist to be updated"],
        });
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
          errors: ["ID is missing"],
        });
      }

      const tasks = await Task.findByPk(id);

      if (!tasks) {
        return res.status(404).json({
          errors: ["This task does not exist to be deleted"],
        });
      }

      await tasks.destroy();
      return res.json({
        message: ["Task successfully deleted"],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TaskController();
