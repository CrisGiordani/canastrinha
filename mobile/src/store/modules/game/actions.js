//START GAME

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
export function startGameSuccess(game) {
  return {
    type: '@game/START_GAME_SUCCESS',
  };
}
export function startGameFailure() {
  return {
    type: '@game/START_GAME_FAILURE',
  };
}

// PLAYING NOW
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

// REGISTER ROUND
export function registerRoundRequest(id_game, partial_a, partial_b) {
  return {
    type: '@game/REGISTER_ROUND_REQUEST',
    payload: {id_game, partial_a, partial_b},
  };
}

// REACH 3000
export function reach3000Request(titulo, msg) {
  return {
    type: '@game/REACH_3000_REQUEST',
    payload: {titulo, msg},
  };
}
export function reach3000Success() {
  return {
    type: '@game/REACH_3000_SUCCESS',
  };
}

export function reach3000Failure() {
  return {
    type: '@game/REACH_3000_FAILURE',
  };
}
//  CANCEL GAME
export function cancelGameRequest(id_game) {
  return {
    type: '@game/CANCEL_GAME_REQUEST',
    payload: {id_game},
  };
}

export function cancelGameSuccess() {
  return {
    type: '@game/CANCEL_GAME_SUCCESS',
  };
}

// FINISH GAME
export function finishGameRequest(id_game) {
  return {
    type: '@game/FINISH_GAME_REQUEST',
    payload: {id_game},
  };
}

export function finishGameSuccess() {
  return {
    type: '@game/FINISH_GAME_SUCCESS',
  };
}
