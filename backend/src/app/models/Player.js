import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class Player extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                avatar: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            { sequelize }
        );

        this.addHook('beforeSave', async player => {
            if (player.password) {
                player.password_hash = await bcrypt.hash(player.password, 8);
            }
        });
        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default Player;
