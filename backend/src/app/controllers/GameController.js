import * as Yup from 'yup';
import Game from '../models/Game';
import Player from '../models/Player';

class GameController {
    async store(req, res) {
        const schema = Yup.object().shape({
            id_league: Yup.number().required(),
            player_a1: Yup.number().required(),
            player_a2: Yup.number().required(),
            player_b1: Yup.number().required(),
            player_b2: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Selecione os 4 jogadores' });
        }

        req.body.created_by = req.playerId;

        const {
            id,
            id_league,
            player_a1,
            player_a2,
            player_b1,
            player_b2,
            created_by,
        } = await Game.create(req.body);

        return res.json({
            id,
            id_league,
            player_a1,
            player_a2,
            player_b1,
            player_b2,
            created_by,
        });
    }

    async update(req, res) {
        // 1. busca dados do jogo atual
        const game = await Game.findByPk(req.params.id);

        if (!game) {
            return res.status(400).json({
                error: 'Jogo não encontrado!',
            });
        }
        // 2. verifica se ator é um dos players
        if (
            game.player_a1 !== req.playerId &&
            game.player_a2 !== req.playerId &&
            game.player_b1 !== req.playerId &&
            game.player_b2 !== req.playerId
        ) {
            return res.status(401).json({
                error: 'Você não tem autorização para editar este jogo!',
            });
        }

        // 3. atualiza scores
        game.score_a += req.body.score_a;
        game.score_b += req.body.score_b;

        game.playing = req.body.playing;

        // 4. salva Game
        const { score_a, score_b } = await game.update(req.body);
        return res.json({
            score_a,
            score_b,
        });
    }

    async index(req, res) {
        if (req.params.id > 0) {
            const game = await Game.findByPk(req.params.id, {
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
            if (!game) {
                return res.status(400).json({
                    error: 'Jogo não encontrado!',
                });
            }
            return res.json(game);
        } else {
            const allGames = await Game.findAll({
                attributes: [
                    'id',
                    'score_a',
                    'score_b',
                    'created_at',
                    'updated_at',
                ],
                order: [['updated_at', 'desc']],
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
            return res.json(allGames);
        }
    }
}

export default new GameController();
