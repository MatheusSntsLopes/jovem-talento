import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Colaborador from '../models/Colaborador';
import Curriculo from '../models/Curriculo';

const models = [Colaborador, Curriculo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
