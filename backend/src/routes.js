import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PlayerController from './app/controllers/PlayerController';
import SessionController from './app/controllers/SessionController';
import AvatarController from './app/controllers/AvatarController';
import LeagueController from './app/controllers/LeagueController';
import GameController from './app/controllers/GameController';
import RoundController from './app/controllers/RoundController';

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

routes.post('/files', upload.single('file'), AvatarController.store);

// Leagues
routes.post('/leagues', LeagueController.store);
routes.put('/leagues/:id', LeagueController.update);
routes.get('/leagues', LeagueController.index);

// Games
routes.post('/games', GameController.store);
routes.put('/games', GameController.update);
routes.get('/games', GameController.index);

// Rounds
routes.post('/rounds', RoundController.store);
routes.get('/rounds', RoundController.index);

export default routes;
