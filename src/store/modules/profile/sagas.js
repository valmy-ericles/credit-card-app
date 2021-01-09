import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadProfile() {
  
  yield delay(2000)

  try {
    //const result = yield call(api.get, 'api/projeto/profile');
    
    const data = { 
      name: 'João',
    }

    yield put(Actions.loadProfileSuccess(data))   
  } catch(err) {
    yield put(Actions.loadProfileFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_PROFILE_REQUEST, loadProfile),
])