import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class PlayerLeagues {
    async index(req, res) {
        if (req.params.league) {
            const leagues = await LeaguesPlayers.findOne({
                where: {
                    id_player: {
                        [Op.eq]: req.params.player,
                    },
                    id_league: {
                        [Op.eq]: req.params.league,
                    },
                },
                attributes: [['id_league', 'id'], 'level'],
                include: [
                    {
                        model: League,
                        as: 'league',
                        attributes: ['name'],
                    },
                ],
            });
            return res.json(leagues);
        } else {
            const leagues = await LeaguesPlayers.findAll({
                where: {
                    id_player: {
                        [Op.eq]: req.params.player,
                    },
                },
                attributes: [['id_league', 'id'], 'level'],
                include: [
                    {
                        model: League,
                        as: 'league',
                        attributes: ['name'],
                    },
                ],
            });
            return res.json(leagues);
        }
    }
    async store(req, res) {
        const alreadyJoined = await LeaguesPlayers.findOne({
            where: {
                id_player: {
                    [Op.eq]: req.playerId,
                },
                id_league: {
                    [Op.eq]: req.params.league,
                },
            },
        });
        if (alreadyJoined) {
            return res
                .status(400)
                .json({ error: 'O jogador já é um integrante da Liga' });
        }
        await LeaguesPlayers.create({
            id_player: req.playerId,
            id_league: req.params.league,
            level: 0,

            /**
            Level 3: owner
            Lever 2: admin
            Level 1: member
            Level 0: waiting authorization
            Level -1: authorization denied
            */
        });
        return res.status(201).json({ message: 'Solicitado com sucesso!' });
    }
    async delete(req, res) {
        const integrante = await LeaguesPlayers.findOne({
            where: {
                id_player: {
                    [Op.eq]: req.playerId,
                },
                id_league: {
                    [Op.eq]: req.params.league,
                },
            },
        });

        if (!integrante) {
            return res.status(400).json({
                error: 'Integrante não encontrado!',
            });
        }

        await LeaguesPlayers.destroy({
            where: {
                id_player: {
                    [Op.eq]: req.playerId,
                },
                id_league: {
                    [Op.eq]: req.params.league,
                },
            },
        });
        return res
            .status(204)
            .json({ message: 'Integrante removido com sucesso!' });
    }
}

export default new PlayerLeagues();
