import Toast from 'react-native-toast-message';

import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadCreditCards() {
  
  yield delay(2000)

  try {
    //const result = yield call(api.get, 'api/projeto/credit_cards');
    
    const data = [
      { name: 'Nubank' },
      { name: 'Itaú' },
      { name: 'Bradesco' },
      { name: 'Next' },
      { name: 'Banco do Brasil' },
    ]

    yield put(Actions.loadCreditCardsSuccess(data))   
  } catch(err) {
    yield put(Actions.loadCreditCardsFailed(err))
  }
}

export function* createCreditCard({ payload }) {
  
  yield delay(2000)

  try {
    //const result = yield call(api.post, 'api/projeto/credit_cards');

    yield put(Actions.newCreditCardSuccess())
    
    Toast.show({
      type: 'success',
      text1: 'Cartão criado com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.newCreditCardFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_CREDIT_CARDS_REQUEST, loadCreditCards),
  takeLatest(Types.NEW_CREDIT_CARD_REQUEST, createCreditCard),
])