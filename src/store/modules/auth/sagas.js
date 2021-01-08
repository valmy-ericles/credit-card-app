import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload
  console.log(payload)

  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    console.log(response)
    const { token, user } = response.data;
  
    if(!user.provider) {
      console.tron.error('usuário não é prestador');
      return;
    }
  
    yield put(signInSuccess(token, user))
  
    // history.push('/dashboard');
  } catch(err) {
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);