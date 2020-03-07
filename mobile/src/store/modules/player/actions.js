export function updatePlayerRequest(data) {
  return {
    type: '@player/UPDATE_PLAYER_REQUEST',
    payload: {data},
  };
}

export function updatePlayerSuccess(player) {
  return {
    type: '@player/UPDATE_PLAYER_SUCCESS',
    payload: {player},
  };
}

export function updatePlayerFailure() {
  return {
    type: '@player/UPDATE_PLAYER_FAILURE',
  };
}
