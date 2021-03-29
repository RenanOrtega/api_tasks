import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Task from '../models/Task';
import Situation from '../models/Situation';
import Category from '../models/Category';

const models = [User, Task, Situation, Category];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
