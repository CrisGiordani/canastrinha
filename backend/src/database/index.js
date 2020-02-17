import Sequelize from 'sequelize';

import Player from '../app/models/Player';
import League from '../app/models/League';
import Game from '../app/models/Game';
import Round from '../app/models/Round';

import databaseConfig from '../config/database';

const models = [Player, League, Game, Round];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
