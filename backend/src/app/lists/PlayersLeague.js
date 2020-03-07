import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class PlayersLeague {
    async index(req, res) {
        const playersLeague = await LeaguesPlayers.findAll({
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
                    attributes: ['name'],
                },
            ],
        });
        return res.json(playersLeague);
    }
}

export default new PlayersLeague();
