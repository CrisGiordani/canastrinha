import Sequelize, { Model } from 'sequelize';

class League extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.TEXT,
                rules: Sequelize.TEXT,
                code: Sequelize.STRING,
                level: Sequelize.INTEGER,
            },
            { sequelize }
        );

        this.addHook('beforeCreate', league => {
            league.code = new Date().getTime().toString(36);
        });

        return this;
    }
}

export default League;
