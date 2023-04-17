require('dotenv').config();

import { Sequelize, DataTypes, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION);

export default class Curriculo extends Model {
  static associate(models) {
    this.belongsTo(models.Colaborador, { foreignKey: 'colaborador_id' });
  }
}

Curriculo.init(
  {
    biografia: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 1000],
            msg: 'Este campo deve ter entre 3 e 1000 caracteres',
          },
        },
      },
    },
    formacao: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 1000],
            msg: 'Campo estado deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },
    experiencia: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 1000],
            msg: 'Este campo deve ter entre 3 e 1000 caracteres',
          },
        },
      },
    },
    competencia: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 1000],
            msg: 'Este campo deve ter entre 3 e 1000 caracteres',
          },
        },
      },
    },
    habilidade: {
      type: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 1000],
            msg: 'Este campo deve ter entre 3 e 1000 caracteres',
          },
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Curriculos',
  },
);

Curriculo.sync();
