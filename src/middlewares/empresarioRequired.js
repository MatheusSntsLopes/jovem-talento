require('dotenv').config();

import jwt from 'jsonwebtoken';
import Empresario from '../models/Empresario';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const empresario = await Empresario.findOne({
      where: {
        id,
        email,
      },
    });

    if (!empresario) {
      return res.status(401).json({ errors: ['Usuario invalido'] });
    }
    req.empresarioId = id;
    req.empresarioEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expirado ou invalido'] });
  }
};
