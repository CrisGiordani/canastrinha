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

    static associate(models) {
        this.belongsTo(models.Player, {
            foreignKey: 'player_a1',
            as: 'p_a1',
        });
        this.belongsTo(models.Player, {
            foreignKey: 'player_a2',
            as: 'p_a2',
        });
        this.belongsTo(models.Player, {
            foreignKey: 'player_b1',
            as: 'p_b1',
        });
        this.belongsTo(models.Player, {
            foreignKey: 'player_b2',
            as: 'p_b2',
        });
        this.belongsTo(models.Player, {
            foreignKey: 'created_by',
            as: 'admin',
        });
        this.belongsTo(models.League, {
            foreignKey: 'id_league',
            as: 'league',
        });
        this.hasMany(models.Round, {
            foreignKey: 'id_game',
            as: 'rounds',
        });
    }
}

export default Game;
