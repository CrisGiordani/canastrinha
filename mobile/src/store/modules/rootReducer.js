import {combineReducers} from 'redux';

import auth from './auth/reducer';
import player from './player/reducer';
import game from './game/reducer';

export default combineReducers({
  auth,
  player,
  game,
});
