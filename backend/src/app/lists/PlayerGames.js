import * as Yup from 'yup';
import Game from '../models/Game';
import Player from '../models/Player';

import { Op } from 'sequelize';
class PlayerGames {
    async index(req, res) {
        if (req.params.player > 0) {
            const games = await Game.findAll({
                where: {
                    [Op.or]: [
                        { player_a1: req.params.player },
                        { player_a2: req.params.player },
                        { player_b1: req.params.player },
                        { player_b2: req.params.player },
                    ],
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
            });
            return res.json(games);
        }
    }
}

export default new PlayerGames();
