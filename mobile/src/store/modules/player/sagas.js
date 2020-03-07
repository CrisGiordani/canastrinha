import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {updatePlayerSuccess, updatePlayerFailure} from './actions';

export function* updatePlayer({payload}) {
  try {
    const {name, email, ...rest} = payload.data.player;

    const player = Object.assign({name, email}, rest.oldPassword ? rest : {});

    const response = yield call(api.put, 'players', player);

    Alert.alert('Sucesso', 'Perfil foi atualizado com sucesso!');

    yield put(updatePlayerSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Erro na atualização do perfil, verifique os dados',
    );
    yield put(updatePlayerFailure());
  }
}

export default all([takeLatest('@player/UPDATE_PLAYER_REQUEST', updatePlayer)]);
