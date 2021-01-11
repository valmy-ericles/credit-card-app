import Toast from 'react-native-toast-message';

import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadCreditCards() {
  
  yield delay(2000)

  try {
    //const result = yield call(api.get, 'api/projeto/credit_cards');
    
    const data = [
      { id: 1, name: 'Nubank' },
      { id: 2, name: 'Itaú' },
      { id: 3, name: 'Bradesco' },
      { id: 4, name: 'Next' },
      { id: 5, name: 'Banco do Brasil' },
    ]

    yield put(Actions.loadCreditCardsSuccess(data))   
  } catch(err) {
    yield put(Actions.loadCreditCardsFailed(err))
  }
}

export function* loadCreditCard({ payload }) {
  const { id } = payload

  yield delay(2000)

  try {
    //const result = yield call(api.get, `api/projeto/credit_cards/${id}`);
    
    const data = {
      name: 'Itaú',
      number: '828585859585',
      dueDate: '01/02/2027',
      cv: '876'
    }

    yield put(Actions.loadCreditCardSuccess(data.name, data.number, data.dueDate, data.cv))   
  } catch(err) {
    console.log(err)
    yield put(Actions.loadCreditCardFailed(err))
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

export function* editCreditCard({ payload }) {
  const { name, number, dueDate, cv } = payload

  yield delay(2000)

  try {
    //const result = yield call(api.put, 'api/projeto/credit_cards', { name, number, dueDate, cv });

    yield put(Actions.editCreditCardSuccess())
    
    Toast.show({
      type: 'success',
      text1: 'Cartão editado com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.editCreditCardFailed(err))
  }
}

export function* deleteCreditCard({ payload }) {
  const { id } = payload

  try {
    //const result = yield call(api.delete, 'api/projeto/credit_cards/${id}');

    yield put(Actions.deleteCreditCardSuccess(id))
    
    Toast.show({
      type: 'success',
      text1: 'Cartão deletado com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.deleteCreditCardFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_CREDIT_CARDS_REQUEST, loadCreditCards),
  takeLatest(Types.NEW_CREDIT_CARD_REQUEST, createCreditCard),
  takeLatest(Types.LOAD_CREDIT_CARD_REQUEST, loadCreditCard),
  takeLatest(Types.EDIT_CREDIT_CARD_REQUEST, editCreditCard),
  takeLatest(Types.DELETE_CREDIT_CARD_REQUEST, deleteCreditCard),
])