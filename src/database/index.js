import Sequelize from 'sequelize';

import Player from '../app/models/Player';
import File from '../app/models/File';
import League from '../app/models/League';

import databaseConfig from '../config/database';

const models = [Player, File, League];

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
