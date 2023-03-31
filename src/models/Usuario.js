import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja existe',
        },
        validade: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      rua: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo rua deve ter entre 3 a 255 caracteres',
          },
        },
      },
      bairro: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo bairro deve ter entre 3 a 255 caracteres',
          },
        },
      },
      cep: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo cep invalido',
          },
        },
      },
      cidade: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo cidade deve ter entre 3 a 255 caracteres',
          },
        },
      },
      num_casa: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          length: {
            args: [1, 10],
            msg: 'Campo numero da casa deve ter entre 1 a 10 caracteres',
          },
        },
      },
      data_nascimento: Sequelize.DATE,
      telefone: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo data de nascimento deve ter entre 3 a 255 caracteres',
          },
        },
      },
      cpf_cnpj: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          length: {
            args: [11, 14],
            msg: 'Campo cpf/cnpj invalido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo senha deve ter entre 6 a 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (usuario) => {
      usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
    });
    return this;
  }
}
