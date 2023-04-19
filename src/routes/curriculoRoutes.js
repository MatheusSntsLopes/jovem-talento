import { Router } from 'express';
import curriculoController from '../controllers/CurriculoController';
import colaboradorRequired from '../middlewares/colaboradorRequired';

const router = new Router();
router.post('/', colaboradorRequired, curriculoController.store);
router.get('/', curriculoController.index);
router.get('/', colaboradorRequired, curriculoController.show);
router.put('/', colaboradorRequired, curriculoController.update);
router.delete('/', colaboradorRequired, curriculoController.delete);
export default router;
