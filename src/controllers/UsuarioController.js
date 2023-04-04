import Usuario from '../models/Usuario';

class UsuarioController {
  async create(req, res) {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
  }
}

export default new UsuarioController();
