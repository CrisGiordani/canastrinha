import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import player from './player/sagas';
import game from './game/sagas';

export default function* rootSaga() {
  return yield all([auth, player, game]);
}
