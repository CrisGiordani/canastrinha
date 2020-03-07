import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {
  startGameSuccess,
  startGameFailure,
  playing,
  notPlaying,
} from './actions';

export function* setPlaying() {
  const response = yield call(api.get, 'gameplaying');
  if (response.data.length > 0) {
    const game = response.data[0];
    yield put(playing(game));
  } else {
    yield put(notPlaying());
  }
}

export function* startGame({payload}) {
  try {
    const {id_league, player_a1, player_a2, player_b1, player_b2} = payload;

    const response = yield call(api.post, 'games', {
      id_league,
      player_a1,
      player_a2,
      player_b1,
      player_b2,
      playing: 1,
    });

    Alert.alert('Sucesso', 'Partida iniciada com sucesso!');
    const game = response.data[0];
    yield put(startGameSuccess(game));
  } catch (err) {
    Alert.alert(
      'Falha na inicialização',
      'Erro na inicialização da partida, verifique os dados',
    );
    yield put(startGameFailure());
  }
}

export function gameStarted(game) {}

export default all([
  takeLatest('persist/REHYDRATE', setPlaying),
  takeLatest('@game/START_GAME_REQUEST', startGame),
  takeLatest('@game/START_GAME_SUCCESS', gameStarted),
]);
