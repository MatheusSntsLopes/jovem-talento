require('dotenv').config();

import jwt from 'jsonwebtoken';
import Colaborador from '../models/Colaborador';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const colaborador = await Colaborador.findOne({
      where: {
        id,
        email,
      },
    });

    if (!colaborador) {
      return res.status(401).json({ errors: ['Usuario invalido'] });
    }
    req.colaboradorId = id;
    req.colaboradorEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expirado ou invalido'] });
  }
};
