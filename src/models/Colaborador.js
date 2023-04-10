import { Sequelize, DataTypes, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

const sequelize = new Sequelize('postgres://gvwpuipy:iRs_SFZH07QCniwTlkUvt86QS3HCBiVp@babar.db.elephantsql.com/gvwpuipy');

export default class Colaborador extends Model {}

Colaborador.init(
  {
    nome: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      unique: {
        msg: 'Email já existe',
      },
      validate: {
        isEmail: {
          msg: 'Email inválido',
        },
      },
    },
    cpf: {
      type: DataTypes.INTEGER,
      defaultValue: '',
      unique: {
        msg: 'Cpf ja cadastrado',
      },
      validate: {
        isInt: {
          msg: 'Idade precisa ser um número inteiro',
        },
      },
    },
    idade: {
      type: DataTypes.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Idade precisa ser um número inteiro',
        },
        min: 14,
        max: 80,
      },
    },
    telefone: {
      type: DataTypes.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Idade precisa ser um número inteiro',
        },
      },
    },
    estado: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo estado deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    cidade: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo cidade deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    rua: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo rua deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    bairro: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo bairro deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    numero: {
      type: DataTypes.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Numero da casa precisa ser um número inteiro',
        },
      },
    },
    cep: {
      type: DataTypes.INTEGER,
      defaultValue: '',
      validate: {
        isInt: {
          msg: 'Cep precisa ser número inteiro',
        },
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    password: {
      type: DataTypes.VIRTUAL,
      defaultValue: '',
      validate: {
        len: {
          args: [6, 50],
          msg: 'A senha precisa ter entre 6 e 50 caracteres',
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Colaboradores',

  },
);

Colaborador.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcryptjs.hash(user.password, 8);
  }
});

Colaborador.sync();
