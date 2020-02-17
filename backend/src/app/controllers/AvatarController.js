import Player from '../models/Player';

class AvatarController {
    async store(req, res) {
        const { filename: path } = req.file;

        const player = await Player.findByPk(req.playerId);
        player.avatar = path;
        player.save();

        return res.status(200).json({
            message: 'Imagem enviada com sucesso!',
            avatar: path,
        });
    }
}

export default new AvatarController();
