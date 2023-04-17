import Curriculo from '../models/Curriculo';
import Colaborador from '../models/Colaborador';

class CurriculoController {
  async store(req, res) {
    try {
      const curriculo = await Curriculo.create(req.body);
      return res.json(curriculo);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const curriculos = await Curriculo.findAll({
        attributes: ['biografia', 'formacao', 'experiencia', 'competencia', 'habilidade'],
        include: {
          model: Colaborador,
          attributes: ['nome', 'sobrenome', 'idade', 'estado', 'cidade', 'bairro', 'rua', 'cep', 'numero', 'telefone'],
        },
      });
      return res.json(curriculos);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const curriculo = await Curriculo.findByPk(req.curriculoId);
      if (!curriculo) {
        return res.status(400).json({ errors: ['Curriculo não existe'] });
      }
      const novosDados = await Curriculo.update(req.body);

      const {
        biografia, formacao, experiencia, competencia, habilidade,
      } = novosDados;

      return res.json({
        biografia, formacao, experiencia, competencia, habilidade,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const curriculo = await Curriculo.findByPk(req.curriculoId);
      if (!curriculo) {
        return res.status(400).json({ errors: ['Curriculo não existe'] });
      }

      await Curriculo.destroy();

      return res.json({ message: ['Curriculo deletado com sucesso'] });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new CurriculoController();
