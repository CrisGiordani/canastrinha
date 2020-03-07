import * as Yup from 'yup';
import { Op } from 'sequelize';

import Player from '../models/Player';

class PlayerController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(3),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Verifique os dados digitados' });
        }

        const playerExists = await Player.findOne({
            where: { email: req.body.email },
        });
        if (playerExists) {
            return res
                .status(400)
                .json({ error: 'Este e-mail já está cadastrado.' });
        }
        const { id, name, email } = await Player.create(req.body);
        return res.json({
            id,
            name,
            email,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            oldPassword: Yup.string(),
            password: Yup.string()
                .min(4)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Verifique os dados digitados' });
        }
        const { email, oldPassword } = req.body;

        const player = await Player.findByPk(req.playerId);

        if (email !== player.email) {
            const playerExists = await Player.findOne({
                where: { email },
            });
            if (playerExists) {
                return res
                    .status(400)
                    .json({ error: 'Este e-mail já está cadastrado.' });
            }
        }

        if (oldPassword && !(await player.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }

        const { avatar } = player;
        const { id, name } = await player.update(req.body);

        return res.json({
            id,
            name,
            email,
            avatar,
        });
    }

    async index(req, res) {
        if (req.params.id > 0) {
            const player = await Player.findByPk(req.params.id);
            if (!player) {
                return res.status(400).json({
                    error: 'Jogador não encontrado!',
                });
            }
            return res.json(player);
        } else {
            const players = await Player.findAll({
                attributes: ['id', 'name', 'email', 'avatar'],
            });
            return res.json(players);
        }
    }
}

export default new PlayerController();
