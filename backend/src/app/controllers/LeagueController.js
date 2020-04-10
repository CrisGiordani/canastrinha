import * as Yup from 'yup';
import League from '../models/League';

class LeagueController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string(),
            rules: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Verifique os dados digitados' });
        }

        /**
            Level 3: owner
            Lever 2: admin
            Level 1: member
            Level 0: waiting authorization
            Level -1: authorization denied
        */

        req.body.level = 3;

        const { name } = req.body;

        const leagueExists = await League.findOne({
            where: { name },
        });

        if (leagueExists) {
            return res
                .status(400)
                .json({ error: 'Já existe uma liga com esse nome.' });
        }

        const {
            id,
            description,
            rules,
            code,
            created_by,
        } = await League.create(req.body);

        return res.json({ id, name, description, rules, code, created_by });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string(),
            rules: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Verifique os dados digitados' });
        }
        const league = await League.findByPk(req.params.id);

        if (!league) {
            return res.status(400).json({
                error: 'Nenhuma liga encontrada.',
            });
        }
        if (league.created_by !== req.playerId) {
            return res.status(401).json({
                error: 'Você não tem autorização para editar esta Liga',
            });
        }

        const { name } = req.body;

        if (name !== league.name) {
            const leagueExists = await League.findOne({
                where: {
                    name,
                },
            });
            if (leagueExists) {
                return res
                    .status(400)
                    .json({ error: 'Já existe uma liga com esse nome.' });
            }
        }

        const { description, rules } = await League.update(req.body);
        return res.json({
            name,
            description,
            rules,
        });
    }

    async index(req, res) {
        if (req.params.id > 0) {
            const league = await League.findByPk(req.params.id);
            if (!id) {
                return res.status(400).json({
                    error: 'Liga não encontrada!',
                });
            }
            return res.json(league);
        } else {
            const allLeagues = await League.findAll({
                attributes: [
                    'id',
                    'name',
                    'description',
                    'rules',
                    'created_by',
                ],
            });
            return res.json(allLeagues);
        }
    }
}

export default new LeagueController();
