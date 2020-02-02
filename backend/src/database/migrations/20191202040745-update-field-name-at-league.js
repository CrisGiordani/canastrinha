module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('leagues', 'name', {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('leagues', 'name', {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        });
    },
};
