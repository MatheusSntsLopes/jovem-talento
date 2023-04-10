import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Colaborador from '../models/Colaborador';

const models = [Colaborador];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
