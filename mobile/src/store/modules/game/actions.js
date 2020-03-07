export function startGameRequest(
  id_league,
  player_a1,
  player_a2,
  player_b1,
  player_b2,
) {
  return {
    type: '@game/START_GAME_REQUEST',
    payload: {id_league, player_a1, player_a2, player_b1, player_b2},
  };
}

export function startGameSucess(game) {
  return {
    type: '@game/START_GAME_SUCCESS',
  };
}

export function startGameFailure() {
  return {
    type: '@game/START_GAME_FAILURE',
  };
}

export function playing(game) {
  return {
    type: '@game/PLAYING',
  };
}

export function notPlaying() {
  return {
    type: '@game/NOT_PLAYING',
  };
}
