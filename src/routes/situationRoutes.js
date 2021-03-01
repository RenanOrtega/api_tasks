import { Router } from 'express';
import situationController from '../controllers/SituationController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, situationController.index);
router.get('/:id', loginRequired, situationController.show);
router.post('/', loginRequired, situationController.store);
router.put('/:id', loginRequired, situationController.update);
router.delete('/:id', loginRequired, situationController.delete);

export default router;
