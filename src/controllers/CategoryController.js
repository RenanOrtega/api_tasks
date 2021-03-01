import Category from '../models/Category';

class CategoryController {

  //Store
  async store(req, res) {
    try {
      const categories = await Category.create(req.body);

      return res.status(201).json(categories);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
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

      const categories = await Category.findByPk(id);

      if (!categories) {
        return res.status(404).json({
          errors: ['This category does not exist to be displayed']
        })
      }

      return res.status(200).json(categories);
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

      const categories = await Category.findByPk(id);

      if (!categories) {
        return res.status(404).json({
          errors: ['This category does not exist to be updated'],
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

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is missing']
        });
      }

      const categories = await Category.findByPk(id);

      if (!categories) {
        return res.status(404).json({
          errors: ['Category does not exist to be deleted'],
        });
      }

      await categories.destroy();
      return res.status(200).json({
        message: ['Category successfully deleted'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new CategoryController();
