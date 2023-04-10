import { Router } from 'express';
import colaboradorController from '../controllers/ColaboradorController';

const router = new Router();
router.post('/', colaboradorController.store);
router.get('/', colaboradorController.index);
router.get('/:id', colaboradorController.show);
router.put('/:id', colaboradorController.update);
router.delete('/:id', colaboradorController.delete);
export default router;
