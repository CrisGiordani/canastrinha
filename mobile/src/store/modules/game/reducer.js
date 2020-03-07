//para manipular o state
import produce from 'immer';

const INITIAL_STATE = {
  playing: false,
  loading: false,
};

export default function game(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@game/START_GAME_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@game/START_GAME_SUCCESS': {
        draft.loading = false;
        draft.playing = true;
        break;
      }
      case '@game/PLAYING': {
        draft.playing = true;
        break;
      }
      case '@game/NOT_PLAYING': {
        draft.playing = false;
        break;
      }
      case '@game/START_GAME_SUCCESS': {
        draft.loading = false;
        draft.playing = true;
        break;
      }
      case '@game/START_GAME_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@game/GAME_FINISHED': {
        draft.loading = false;
        draft.playing = false;
        break;
      }

      default:
    }
  });
}
