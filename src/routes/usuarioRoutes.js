import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();

router.post('/', usuarioController.create);

export default router;
