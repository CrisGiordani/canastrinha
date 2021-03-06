//para manipular o state
import produce from 'immer';

const INITIAL_STATE = {
  playing: false,
  loading: false,
  reach3000: false,
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
      case '@game/START_GAME_FAILURE': {
        draft.loading = false;
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

      case '@game/REGISTER_ROUND_REQUEST': {
        draft.loading = true;
        draft.playing = true;
        break;
      }

      case '@game/REACH_3000_SUCCESS': {
        draft.loading = false;
        draft.playing = true;
        draft.reach3000 = true;
        break;
      }

      case '@game/REACH_3000_FAILURE': {
        draft.loading = false;
        draft.playing = true;
        draft.reach3000 = false;
        break;
      }

      case '@game/CANCEL_GAME_REQUEST': {
        draft.loading = true;
        draft.playing = true;
        draft.reach3000 = false;
        break;
      }

      case '@game/CANCEL_GAME_SUCCESS': {
        draft.loading = false;
        draft.playing = false;
        draft.reach3000 = false;
        break;
      }

      case '@game/FINISH_GAME_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@game/FINISH_GAME_SUCCESS': {
        draft.loading = false;
        draft.playing = false;
        break;
      }

      default:
    }
  });
}
