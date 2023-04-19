import { Router } from 'express';
import colaboradorController from '../controllers/ColaboradorController';
import colaboradorRequired from '../middlewares/colaboradorRequired';

const router = new Router();
router.post('/', colaboradorController.store);
router.get('/', colaboradorController.index);
router.get('/', colaboradorRequired, colaboradorController.show);
router.put('/', colaboradorRequired, colaboradorController.update);
router.delete('/', colaboradorRequired, colaboradorController.delete);
export default router;
