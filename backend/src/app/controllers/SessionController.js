import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import Player from '../models/Player';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const player = await Player.findOne({ where: { email } });

        if (!player) {
            return res.status(401).json({ error: 'E-mail não cadastrado.' });
        }

        if (!(await player.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }

        const { id, name, avatar } = player;

        return res.json({
            player: {
                id,
                name,
                email,
                avatar,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
