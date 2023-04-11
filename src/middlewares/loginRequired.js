import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login Required'] });
  }

  const { text, token } = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.colaboradorId = id;
    req.colaboradorEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expirado ou invalido'] });
  }
};
