import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import tasksRoutes from './routes/taskRoutes';
import situationRoutes from './routes/situationRoutes';
import categoryRoutes from './routes/categoryRoutes';

/*const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
];

const corsOptions = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) !== -1 || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not Allowed By CORS!'));
    }
  }
};*/

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    //Rotas para home
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/tasks/', tasksRoutes);
    this.app.use('/situations/', situationRoutes);
    this.app.use('/categories/', categoryRoutes);
  }
}

export default new App().app
