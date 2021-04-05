import Situation from "../models/Situation";

class SituationController {
  async store(req, res) {
    try {
      if (!req.body.category_id) {
        return res.status(400).json({
          errors: ["Category ID is missing"],
        });
      }

      const situations = await Situation.create(req.body);
      return res.status(201).json(situations);
    } catch (e) {
      console.error(e);

      // return res.status(400).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
  }

  async index(req, res) {
    try {
      const { page, pageSize, category_id } = req.query;

      if (!category_id) {
        return res.status(400).json({
          errors: ["Category ID is missing"],
        });
      }

      const situations = await Situation.findAll({
        offset: page ? page * pageSize : 0,
        limit: pageSize ? +pageSize : 5,
        where: { category_id },
      });

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
          errors: ["ID is missing"],
        });
      }

      const situations = await Situation.findByPk(id);

      if (!situations) {
        return res.status(404).json({
          errors: ["This situation does not exist to be displayed"],
        });
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
          errors: ["ID is missing"],
        });
      }

      const situations = await Situation.findByPk(id);

      if (!situations) {
        return res.status(404).json({
          errors: ["This situation does not exist to be updated"],
        });
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
          errors: ["ID is missing"],
        });
      }

      const situations = await Situation.findByPk(id);

      if (!situations) {
        return res.status(404).json({
          errors: ["This situation does not exist to be deleted"],
        });
      }

      await situations.destroy();
      return res.status(200).json({
        message: ["Situation successfully deleted"],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SituationController();
