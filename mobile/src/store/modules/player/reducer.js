//para manipular o state
import produce from 'immer';

const INITIAL_STATE = {
  player: null,
};

export default function player(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.player = action.payload.player;
        break;
      }
      case '@player/UPDATE_PLAYER_SUCCESS': {
        draft.player = action.payload.player;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.player = null;
        break;
      }
      default:
    }
  });
}
