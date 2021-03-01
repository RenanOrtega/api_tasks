import { Router } from 'express';
import categoryController from '../controllers/CategoryController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, categoryController.index);
router.get('/:id', loginRequired, categoryController.show);
router.post('/', loginRequired, categoryController.store);
router.put('/:id', loginRequired, categoryController.update);
router.delete('/:id', loginRequired, categoryController.delete);

export default router;
