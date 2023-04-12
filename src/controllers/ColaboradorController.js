import Colaborador from '../models/Colaborador';

class ColaboradorController {
  async store(req, res) {
    try {
      const colaborador = await Colaborador.create(req.body);
      const { id, nome, email } = colaborador;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const colaboradores = await Colaborador.findAll({ attributes: ['id', 'nome', 'email', 'estado', 'cidade', 'rua'] });
      return res.json(colaboradores);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const colaborador = await Colaborador.findByPk(req.params.id);
      const { id, nome, email } = colaborador;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const colaborador = await Colaborador.findByPk(req.colaborador.id);

      if (!colaborador) {
        return res.status(400).json({ errors: ['Colaborador não existe'] });
      }

      const novosDados = await colaborador.update(req.body);
      const {
        id, nome, email, cpf, idade, telefone, estado, cidade, bairro, cep, rua, numero,
      } = novosDados;
      return res.json({
        id, nome, email, cpf, idade, telefone, estado, cidade, bairro, cep, rua, numero,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const colaborador = await Colaborador.findByPk(req.colaborador.id);

      if (!colaborador) {
        return res.status(400).json({ errors: ['Colaborador não existe'] });
      }

      await colaborador.destroy();

      return res.json({ message: ['Conta deletada com sucesso'] });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new ColaboradorController();
