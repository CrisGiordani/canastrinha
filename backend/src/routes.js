import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PlayerController from './app/controllers/PlayerController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import LeagueController from './app/controllers/LeagueController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// ROTAS PÚBLICAS
routes.post('/players', PlayerController.store);
routes.post('/sessions', SessionController.store);

// ROTAS PRIVADAS
routes.use(authMiddleware);

routes.put('/players', PlayerController.update);
routes.get('/players', PlayerController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/leagues', LeagueController.store);
routes.put('/leagues/:id', LeagueController.update);
routes.get('/leagues/', LeagueController.index);
export default routes;
