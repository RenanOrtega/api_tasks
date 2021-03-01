import { Router } from 'express';
import responsibleController from '../controllers/ResponsibleController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, responsibleController.index);
router.get('/:id', loginRequired, responsibleController.show);
router.post('/', loginRequired, responsibleController.store);
router.put('/:id', loginRequired, responsibleController.update);
router.delete('/:id', loginRequired, responsibleController.delete);

export default router;
