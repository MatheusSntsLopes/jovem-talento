import { Sequelize, Model, DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validade: {
          length: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
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
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        validade: {
          length: {
            args: [6, 30],
            msg: 'Campo senha deve ter entre 6 a 30 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
