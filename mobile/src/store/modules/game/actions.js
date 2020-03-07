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

export function notPlaying(game) {
  return {
    type: '@game/NOT_PLAYING',
  };
}

export function registerRound(id_game, partial_a, partial_b) {
  return {
    type: '@game/REGISTER_ROUND_REQUEST',
    payload: {id_game, partial_a, partial_b},
  };
}

export function reached3000Request(titulo, msg) {
  return {
    type: '@game/REACHED_3000_REQUEST',
    payload: {titulo, msg},
  };
}
export function reached3000Success() {
  return {
    type: '@game/REACHED_3000_SUCCESS',
  };
}
