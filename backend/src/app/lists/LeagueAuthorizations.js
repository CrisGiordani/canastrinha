import Player from '../models/Player';
import League from '../models/League';
import LeaguesPlayers from '../models/LeaguesPlayers';

import { Op } from 'sequelize';
class LeaguePlayers {
    async index(req, res) {
        const myLeagues = await LeaguesPlayers.findAll({
            where: {
                id_player: {
                    [Op.eq]: req.playerId,
                },
                level: {
                    [Op.gt]: 2,
                },
            },
            attributes: ['id_league'],
        });

        if (myLeagues) {
            var myLeaguesIds = [];
            for (var i = 0; i < myLeagues.length; i++) {
                myLeaguesIds.push(myLeagues[i].id_league);
            }
            const players = await LeaguesPlayers.findAll({
                where: {
                    level: {
                        [Op.eq]: 0,
                    },
                    id_league: {
                        [Op.in]: myLeaguesIds,
                    },
                },
                attributes: ['id', 'id_player', 'level'],
                include: [
                    {
                        model: Player,
                        as: 'player',
                        attributes: ['name', 'avatar'],
                    },
                    {
                        model: League,
                        as: 'league',
                        attributes: ['name', 'updated_at'],
                    },
                ],
                order: [['updated_at', 'desc']],
            });
            return res.json(players);
        }
    }
}

export default new LeaguePlayers();
