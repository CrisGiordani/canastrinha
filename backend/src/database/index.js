import Sequelize from 'sequelize';

import League from '../app/models/League';
import Game from '../app/models/Game';
import Round from '../app/models/Round';
import Player from '../app/models/Player';

import LeaguesPlayers from '../app/models/LeaguesPlayers';

import databaseConfig from '../config/database';

const models = [League, Game, Round, Player, LeaguesPlayers];

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
