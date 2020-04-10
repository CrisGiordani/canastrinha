import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class LeaguePlayers {
    async index(req, res) {
        const players = await LeaguesPlayers.findAll({
            where: {
                id_league: {
                    [Op.eq]: req.params.league,
                },
            },
            attributes: [['id_player', 'id'], 'level'],
            include: [
                {
                    model: Player,
                    as: 'player',
                    attributes: ['name', 'avatar'],
                },
            ],
            order: [
                ['level', 'desc'],
                [{ model: Player, as: 'player' }, 'name', 'asc'],
            ],
        });
        return res.json(players);
    }
}

export default new LeaguePlayers();
