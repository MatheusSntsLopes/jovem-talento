import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import colaboradorRoutes from './src/routes/colaboradorRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/colaboradores/', colaboradorRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
