module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('leagues', 'code', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('leagues', 'code');
    },
};
