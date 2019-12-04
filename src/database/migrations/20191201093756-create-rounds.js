module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rounds', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_game: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            round: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id_player: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            score_A: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            score: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
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
        return queryInterface.dropTable('rounds');
    },
};
