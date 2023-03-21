const Usuario = require('../models/UsuarioModel');

exports.index = (req, res) => {
  res.render('login');
};

exports.register = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.register();

    if (usuario.errors.length > 0) {
      req.flash('error', usuario.errors);
      req.session.save(() => res.redirect('/'));

      return;
    }

    req.flash('success', 'Seu usuario foi criado com sucesso');
    req.session.save(() => res.redirect('/'));
  } catch (e) {
    res.render('404');
  }
};
