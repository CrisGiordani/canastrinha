module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'canastrinha',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
};
