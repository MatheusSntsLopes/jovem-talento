import { Router } from 'express';
import colaboradorController from '../controllers/ColaboradorController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.post('/', colaboradorController.store);
router.get('/', loginRequired, colaboradorController.index);
router.get('/', loginRequired, colaboradorController.show);
router.put('/', loginRequired, colaboradorController.update);
router.delete('/', loginRequired, colaboradorController.delete);
export default router;
