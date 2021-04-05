import DataTokenProvider from "../helpers/DataTokenProvider";
import Category from "../models/Category";

class CategoryController {
  async store(req, res) {
    try {
      const { id: user_id } = DataTokenProvider.getData(req);

      const categories = await Category.create({ user_id, ...req.body });

      return res.status(201).json(categories);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const { page, pageSize } = req.query;
      const { id: user_id } = DataTokenProvider.getData(req);

      const categories = await Category.findAll({
        offset: page ? page * pageSize : 0,
        limit: pageSize ? +pageSize : 5,
        where: { user_id },
      });

      return res.status(200).json(categories);
    } catch (e) {
      return res.status(404).json({ errors: e.message });
    }
  }

  async show(req, res) {
    try {
      const { id: category_id } = req.params;
      const { id: user_id } = DataTokenProvider.getData(req);

      if (!category_id) {
        return res.status(400).json({ errors: ["ID is missing"] });
      }

      const category = await Category.findByPk(category_id);

      if (!category || category.user_id !== user_id) {
        return res.status(404).json({
          errors: ["This category does not exist to be displayed"],
        });
      }

      return res.status(200).json(category);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id: category_id } = req.params;
      const { id: user_id } = DataTokenProvider.getData(req);

      if (!category_id) {
        return res.status(400).json({
          errors: ["ID is missing"],
        });
      }

      const categories = await Category.findByPk(category_id);

      if (!categories || category.user_id !== user_id) {
        return res.status(404).json({
          errors: ["This category does not exist to be updated"],
        });
      }

      const categoriesAtt = await categories.update(req.body);
      return res.json(categoriesAtt);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id: category_id } = req.params;
      const { id: user_id } = DataTokenProvider.getData(req);

      if (!category_id) {
        return res.status(400).json({
          errors: ["ID is missing"],
        });
      }

      const categories = await Category.findByPk(category_id);

      if (!categories || category.user_id !== user_id) {
        return res.status(404).json({
          errors: ["Category does not exist to be deleted"],
        });
      }

      await categories.destroy();
      return res.status(200).json({
        message: ["Category successfully deleted"],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CategoryController();
