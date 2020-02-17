import Sequelize, { Model } from 'sequelize';

class Round extends Model {
    static init(sequelize) {
        super.init(
            {
                id_game: Sequelize.INTEGER,
                partial_a: Sequelize.INTEGER,
                partial_b: Sequelize.INTEGER,
            },
            { sequelize }
        );

        return this;
    }
}

export default Round;
