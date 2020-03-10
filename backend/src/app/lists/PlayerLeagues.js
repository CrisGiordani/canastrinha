import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class PlayerLeagues {
    async index(req, res) {
        const leagues = await LeaguesPlayers.findAll({
            where: {
                id_player: {
                    [Op.eq]: req.params.player,
                },
            },
            attributes: [['id_league', 'id']],
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

export default new PlayerLeagues();
