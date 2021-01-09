import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* login({ payload }) {
  const { email, password } = payload
  
  yield delay(2000)

  try {
    //const result = yield call(api.post, 'api/projeto/login', { email, password });

    const token = 'xxx'

    yield put(Actions.loginSuccess(token))   
  } catch(err) {
    yield put(Actions.loginFailed(err))
  }
}

export function* logout() {

  yield delay(2000)

  try {
    //yield call(api.delete, 'api/projeto/logout')

    yield put(Actions.logoutSuccess())

  } catch(err) {
    yield put(Actions.logoutFailed(err))
  }
}

export default all([
  takeLatest(Types.LOGIN_REQUEST, login),
  takeLatest(Types.LOGOUT_REQUEST, logout)
])