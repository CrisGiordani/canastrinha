import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class LeagueRanking {
    async index(req, res) {
        const ranking = await LeaguesPlayers.findAll({
            where: {
                id_league: {
                    [Op.eq]: req.params.league,
                },
            },
            attributes: [['id_player', 'id']],
            include: [
                {
                    model: Player,
                    as: 'player',
                    attributes: ['name', 'avatar', 'score'],
                },
            ],
            order: [
                [{ model: Player, as: 'player' }, 'score', 'desc'],
                [{ model: Player, as: 'player' }, 'name', 'asc'],
            ],
        });
        return res.json(ranking);
    }
}

export default new LeagueRanking();
