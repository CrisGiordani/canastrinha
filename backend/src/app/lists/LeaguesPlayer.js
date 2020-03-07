import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class LeaguesPlayer {
    async index(req, res) {
        const leaguesPlayer = await LeaguesPlayers.findAll({
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
        return res.json(leaguesPlayer);
    }
}

export default new LeaguesPlayer();
