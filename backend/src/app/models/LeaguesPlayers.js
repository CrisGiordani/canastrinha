import Sequelize, { Model } from 'sequelize';

class LeaguesPlayers extends Model {
    static init(sequelize) {
        super.init(
            {
                id_league: Sequelize.INTEGER,
                id_player: Sequelize.INTEGER,
                level: Sequelize.INTEGER,
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Player, {
            foreignKey: 'id_player',
            as: 'player',
        });
        this.belongsTo(models.League, {
            foreignKey: 'id_league',
            as: 'league',
        });
    }
}

export default LeaguesPlayers;
