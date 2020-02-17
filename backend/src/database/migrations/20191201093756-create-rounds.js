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
            partial_a: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            partial_b: {
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
