import Usuario from '../models/User';

class UsuarioController {
  async store(req, res) {
    const usuario = await Usuario.create({
      nome: 'Gabriel',
      email: 'gabriel@gmail.com',
      password: 'alo123',
    });
    res.json(usuario);
  }
}

export default new UsuarioController();
