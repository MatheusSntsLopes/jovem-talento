const mongoose = require('mongoose');
const validator = require('validator');

const UsuarioSchema = new mongoose.Schema({

});

const UsuarioModel = new mongoose.Model('Usuario', UsuarioSchema);

class Usuario {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validar();
    if (this.errors.length > 0) return;

    try {
      this.user = await UsuarioModel.create(this.body);
    } catch (e) {
      console.log(e);
    }
  }

  validar() {
    this.limparDados();

    if (validator.isEmail(this.body.email)) this.errors.push('Email invalido');

    if (this.body.password.length < 6 || this.body.password.length > 40) { this.errors.push('Senha precisa ter entre 6 a 40 caracteres'); }
  }

  limparDados() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {

    };
  }
}

module.exports = Usuario;
