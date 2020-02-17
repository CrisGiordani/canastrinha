import File from '../models/File';
import Player from '../models/Player';

class FileController {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
        });

        const player = await Player.findByPk(req.playerId);
        player.avatar_id = file.id;
        player.save();

        return res.json(file);
    }
}

export default new FileController();
