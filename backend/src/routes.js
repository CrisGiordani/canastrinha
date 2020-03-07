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

import GamePlaying from './app/services/GamePlaying';

import PlayersLeague from './app/lists/PlayersLeague';
import LeaguesPlayer from './app/lists/LeaguesPlayer';

const routes = new Router();
const upload = multer(multerConfig);

// ROTAS PÚBLICAS
routes.post('/players', PlayerController.store);
routes.post('/sessions', SessionController.store);

// ROTAS PRIVADAS
routes.use(authMiddleware);

// Players
routes.put('/players', PlayerController.update); // edita os dados de um jogador
routes.get('/players/:id?', PlayerController.index); // lista jogadores OU dados de um jogador (:id)
routes.get('/players/league/:league', PlayersLeague.index); // lista ligas de um player (:player)

// Files
routes.post('/files', upload.single('file'), AvatarController.store);

// Leagues
routes.post('/leagues', LeagueController.store); // grava uma nova liga
routes.put('/leagues/:id', LeagueController.update); // edita os dados de uma liga
routes.get('/leagues/:id?', LeagueController.index); // lista ligas OU dados de uma liga (:id)
routes.get('/leagues/player/:player', LeaguesPlayer.index); // lista ligas de um player (:player)

// JOGO EM ANDAMENTO
routes.get('/gameplaying', GamePlaying.run);

// Games
routes.post('/games', GameController.store); // grava uma nova partida
routes.put('/games/:id', GameController.update); // edita os dados de uma partida
routes.get('/games/:id?', GameController.index); // lista os jogos OU dados de um jogo (:id)

// Rounds
routes.post('/rounds', RoundController.store);
routes.get('/rounds', RoundController.index);

export default routes;
