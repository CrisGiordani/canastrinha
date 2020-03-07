import Game from '../models/Game';
import Player from '../models/Player';
import League from '../models/League';
import Round from '../models/Round';

import { Op } from 'sequelize';
class GamePlaying {
    async run(req, res) {
        const game = await Game.findAll({
            where: {
                playing: {
                    [Op.eq]: 1,
                },
                [Op.or]: [
                    { player_a1: req.playerId },
                    { player_a2: req.playerId },
                    { player_b1: req.playerId },
                    { player_b2: req.playerId },
                ],
            },
            attributes: [
                'id',
                'playing',
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
                {
                    model: Player,
                    as: 'admin',
                    attributes: ['id', 'name', 'avatar'],
                },
                {
                    model: League,
                    as: 'league',
                    attributes: ['name'],
                },
                {
                    model: Round,
                    as: 'rounds',
                    attributes: ['id', 'partial_a', 'partial_b', 'updated_at'],
                },
            ],
        });

        return res.json(game);
    }
}

export default new GamePlaying();
