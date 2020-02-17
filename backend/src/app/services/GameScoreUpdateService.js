import Game from '../models/Game';

class GameScoreUpdateService {
    async run({ id, id_player, partial_a, partial_b }) {
        const game = await Game.findByPk(id);

        if (!game) {
            throw new Error('Jogo não encontrado!');
        }

        if (
            game.player_a1 !== id_player &&
            game.player_a2 !== id_player &&
            game.player_b1 !== id_player &&
            game.player_b2 !== id_player
        ) {
            throw new Error('Você não tem autorização para editar este jogo!');
        }
        game.score_a += partial_a;
        game.score_b += partial_b;

        const game_atualizado = await game.save();
        return game_atualizado;
    }
}

export default new GameScoreUpdateService();
