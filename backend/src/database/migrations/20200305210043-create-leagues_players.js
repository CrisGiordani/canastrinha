module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('leagues_players', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_league: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id_player: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            admin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('leagues_players');
    },
};
