import Sequelize, { Model } from 'sequelize';

class Game extends Model {
    static init(sequelize) {
        super.init(
            {
                id_league: Sequelize.INTEGER,
                player_a1: Sequelize.INTEGER,
                player_a2: Sequelize.INTEGER,
                player_b1: Sequelize.INTEGER,
                player_b2: Sequelize.INTEGER,
                score_a: Sequelize.INTEGER,
                score_b: Sequelize.INTEGER,
                created_by: Sequelize.INTEGER,
            },
            { sequelize }
        );

        return this;
    }
}

export default Game;
