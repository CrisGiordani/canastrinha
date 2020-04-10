import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {
  startGameSuccess,
  startGameFailure,
  playing,
  notPlaying,
  reach3000Success,
  cancelGameSuccess,
  finishGameSuccess,
} from './actions';

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
    Alert.alert(err.name, err.message);
    yield put(startGameFailure());
  }
}

export function* setPlaying() {
  try {
    const response = yield call(api.get, 'gameplayingservice');
    if (response.data.length > 0) {
      const game = response.data[0];
      yield put(playing(game));
    }
  } catch (err) {
    yield put(notPlaying());
  }
}

export function* registerRound({payload}) {
  try {
    const {id_game, partial_a, partial_b} = payload;

    const response = yield call(api.post, 'rounds', {
      id_game,
      partial_a,
      partial_b,
    });

    Alert.alert('Sucesso', 'Rodada registrada com sucesso!');
  } catch (err) {
    Alert.alert(
      'Falha no Registro',
      'Erro ao registrar rodada, verifique os dados',
    );
  }
}

export function* reach3000({payload}) {
  try {
    const {titulo, msg} = payload;
    Alert.alert(`${titulo}`, `${msg}`);
    yield put(reach3000Success());
  } catch (err) {
    Alert.alert('Erro desconhecido', 'Erro ao atingir 3000 pontos.');
  }
}

export function* cancelGame({payload}) {
  try {
    const {id_game} = payload;
    yield call(api.delete, `games/${id_game}`);
    yield put(cancelGameSuccess());
    Alert.alert('Partida cancelada', 'Partida cancelada com sucesso!');
  } catch (err) {
    Alert.alert('Erro desconhecido', 'Erro ao cancelar a partida.');
  }
}

export function* finishGame({payload}) {
  try {
    const {id_game} = payload;
    const playing = 0;
    const response = yield call(api.put, `games/${id_game}`, {
      playing: 0,
    });
    yield put(finishGameSuccess());
    Alert.alert('Sucesso', 'Partida encerrada com sucesso!');
  } catch (err) {
    Alert.alert('Erro desconhecido', 'Erro ao encerrar a partida.');
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setPlaying),
  takeLatest('@game/START_GAME_REQUEST', startGame),
  takeLatest('@game/REGISTER_ROUND_REQUEST', registerRound),
  takeLatest('@game/REACH_3000_REQUEST', reach3000),
  takeLatest('@game/CANCEL_GAME_REQUEST', cancelGame),
  takeLatest('@game/FINISH_GAME_REQUEST', finishGame),
]);
