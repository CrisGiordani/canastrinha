module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('players', 'avatar_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'files',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('players', 'avatar_id');
    },
};
