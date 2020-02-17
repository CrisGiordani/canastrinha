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
            player_a1: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_a2: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_b1: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            player_b2: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            score_a: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            score_b: {
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
