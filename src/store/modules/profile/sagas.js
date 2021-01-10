import Toast from 'react-native-toast-message';

import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadProfile() {
  
  yield delay(1000)

  try {
    //const result = yield call(api.get, 'api/projeto/profile');
    
    const data = { 
      name: 'João',
      email: 'joão@gmail.com',
      cpf: '222.333.444.12',
      phone: '74 988443366',
    }

    yield put(Actions.loadProfileSuccess(data))   
  } catch(err) {
    yield put(Actions.loadProfileFailed(err))
  }
}

export function* updateProfile({ payload }) {
  const { name, email, cpf, phone, password } = payload

  yield delay(1000)

  try {
    //const result = yield call(api.put, 'api/projeto/profile', { name, email, cpf, phone, password });

    yield put(Actions.updateProfileSuccess())
    
    Toast.show({
      type: 'success',
      text1: 'Perfil atualizado',
      topOffset: 50
    })

  } catch(err) {
    yield put(Actions.updateProfileFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_PROFILE_REQUEST, loadProfile),
  takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile),
])