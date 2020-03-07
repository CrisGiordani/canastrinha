import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, player} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, player));
    //history.push("/dashboard");
  } catch (err) {
    Alert.alert('Erro de autenticação', 'E-mail ou senha incorretos');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, 'players', {
      name,
      email,
      password,
    });
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Verifique os dados digitados');
    yield put(signFailure());
  }
}
export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
