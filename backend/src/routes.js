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

import GamePlayingService from './app/services/GamePlayingService';

import LeagueGames from './app/lists/LeagueGames';
import LeaguePlayers from './app/lists/LeaguePlayers';
import LeagueAuthorizations from './app/lists/LeagueAuthorizations';
import LeagueRanking from './app/lists/LeagueRanking';

import PlayerGames from './app/lists/PlayerGames';
import PlayerLeagues from './app/lists/PlayerLeagues';

const routes = new Router();
const upload = multer(multerConfig);

// ROTAS PÚBLICAS
routes.post('/players', PlayerController.store);
routes.post('/sessions', SessionController.store);

// ROTAS PRIVADAS
routes.use(authMiddleware);

// Players
routes.put('/players', PlayerController.update); // edita os dados de um jogador
routes.get('/players/:id?', PlayerController.index); // lista jogadores OU dados de um jogador
routes.post('/players/join/:league', PlayerLeagues.store); // entrar em uma liga
routes.delete('/players/exit/:league', PlayerLeagues.delete); // sair de uma liga
routes.get('/players/:player/leagues/:league?', PlayerLeagues.index); // lista ligas de um player (ou liga específica)
routes.get('/players/:player/games/:game?', PlayerGames.index); // lista jogos de um player (ou jogo específico)

// Files
routes.post('/files', upload.single('file'), AvatarController.store);

// Leagues
routes.post('/leagues', LeagueController.store); // grava uma nova liga
routes.put('/leagues/:id', LeagueController.update); // edita os dados de uma liga
routes.get('/leagues/:id?', LeagueController.index); // lista ligas OU dados de uma liga
routes.get('/leagues/:league/ranking', LeagueRanking.index); // lista ranking da liga
routes.get('/leagues/:league/games', LeagueGames.index); // lista jogos de uma liga
routes.get('/leagues/:league/players', LeaguePlayers.index); // lista players de uma liga
routes.get('/leaguesAuthorizations', LeagueAuthorizations.index); // lista players pendentes de autorizacao

// JOGO EM ANDAMENTO
routes.get('/gameplayingservice', GamePlayingService.run);

// Games
routes.post('/games', GameController.store); // grava uma nova partida
routes.put('/games/:id', GameController.update); // edita os dados de uma partida
routes.get('/games/:id?', GameController.index); // lista os jogos OU dados de um jogo
routes.delete('/games/:id', GameController.delete); // apaga um jogo e respectivos dados

// Rounds
routes.post('/rounds', RoundController.store);
routes.get('/rounds', RoundController.index);

export default routes;
