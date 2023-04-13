require('dotenv').config();

import { Sequelize, DataTypes, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION);

export default class Curriculo extends Model {
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
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
            args: [0, 1000],
            msg: 'Campo biografia deve ter entre 0 a 1000 caracteres',
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
            args: [0, 5000],
            msg: 'Campo estado deve ter entre 0 a 5000 caracteres',
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
            args: [0, 5000],
            msg: 'Campo estado deve ter entre 0 a 5000 caracteres',
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
            args: [0, 5000],
            msg: 'Campo estado deve ter entre 0 a 5000 caracteres',
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
