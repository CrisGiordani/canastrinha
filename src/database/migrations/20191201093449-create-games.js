module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('games', {
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
            player_A1: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_A2: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_B1: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_B2: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            score_A: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            score_B: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        return queryInterface.dropTable('games');
    },
};
