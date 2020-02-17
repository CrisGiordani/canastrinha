import * as Yup from 'yup';
import Round from '../models/Round';
import GameScoreUpdateService from '../services/GameScoreUpdateService';

class RoundController {
    async store(req, res) {
        const schema = Yup.object().shape({
            partial_a: Yup.number().required(),
            partial_b: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Digite o resultado para registrar a rodada. ',
            });
        }

        req.body.created_by = req.playerId;

        const round = await Round.create(req.body);

        const game = await GameScoreUpdateService.run({
            id: req.body.id_game,
            id_player: req.playerId,
            partial_a: req.body.partial_a,
            partial_b: req.body.partial_b,
        });

        return res.json([game, round]);
    }

    async index(req, res) {
        const allRounds = await Round.findAll({
            attributes: ['partial_a', 'partial_b', 'created_at'],
        });
        return res.json(allRounds);
    }
}

export default new RoundController();
