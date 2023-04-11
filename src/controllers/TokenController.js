import jwt from 'jsonwebtoken';
import Colaborador from '../models/Colaborador';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ error: ['Email ou senha invalidos'] });
    }
    console.log(password);
    const colaborador = await Colaborador.findOne({ where: { email, password } });

    if (!colaborador) {
      return res.status(401).json({ error: ['Colaborador não existe'] });
    }

    if (!(await colaborador.passwordIsValid(password))) {
      return res.status(401).json({ error: ['Senha invalida'] });
    }
    const { id } = colaborador;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({ token });
  }
}

export default new TokenController();
