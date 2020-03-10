import * as Yup from 'yup';
import Game from '../models/Game';
import Player from '../models/Player';

import { Op } from 'sequelize';
class LeaguesGames {
    async index(req, res) {
        if (req.params.league > 0) {
            const games = await Game.findAll({
                where: {
                    id_league: {
                        [Op.eq]: req.params.league,
                    },
                },

                attributes: [
                    'id',
                    'score_a',
                    'score_b',
                    'created_at',
                    'updated_at',
                ],
                include: [
                    {
                        model: Player,
                        as: 'p_a1',
                        attributes: ['id', 'name', 'avatar'],
                    },
                    {
                        model: Player,
                        as: 'p_a2',
                        attributes: ['id', 'name', 'avatar'],
                    },
                    {
                        model: Player,
                        as: 'p_b1',
                        attributes: ['id', 'name', 'avatar'],
                    },
                    {
                        model: Player,
                        as: 'p_b2',
                        attributes: ['id', 'name', 'avatar'],
                    },
                ],
                order: [['updated_at', 'desc']],
            });
            return res.json(games);
        }
    }
}

export default new LeaguesGames();
