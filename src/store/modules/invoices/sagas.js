import Toast from 'react-native-toast-message';

import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadInvoices() {
  
  yield delay(1000)

  try {
    //const result = yield call(api.get, 'api/projeto/invoices');
    
    const data = [
      { id: 1, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
      { id: 2, cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
      { id: 3, cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
      { id: 4, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
      { id: 5, cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { id: 6, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
      { id: 7, cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { id: 8, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
      { id: 9, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
      { id: 10, cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
      { id: 11, cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
      { id: 12, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
      { id: 13, cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { id: 14, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
      { id: 15, cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { id: 16, cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
    ]
   
    yield put(Actions.loadInvoicesSuccess(data))
  } catch(err) {
    yield put(Actions.loadInvoicesFailed(err))
  }
}

export function* loadInvoice({ payload }) {
  const { id } = payload

  yield delay(1000)

  try {
    //const result = yield call(api.get, `api/projeto/invoices/${id}`);
    const paid = true
    const creditCard = 'nubank'
    const dueDate = '24/01/2021'
    const value = '150,00'

    yield put(Actions.loadInvoiceSuccess(paid, creditCard, dueDate, value))
  } catch(err) {
    yield put(Actions.loadInvoiceFailed(err))
  }
}

export function* newInvoice({ payload }) {
  const { paid, creditCard, dueDate, value } = payload
  
  yield delay(2000)

  try {
    //const result = yield call(api.post, 'api/projeto/invoices', { paid, creditCard, dueDate, value });

    yield put(Actions.newInvoiceSuccess())

    Toast.show({
      type: 'success',
      text1: 'Fatura criada com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.newInvoiceFailed())
  }
}

export function* editInvoice({ payload }) {
  const { paid, creditCard, dueDate, value } = payload
  
  yield delay(2000)

  try {
    //const result = yield call(api.put, 'api/projeto/invoices', { paid, creditCard, dueDate, value });

    yield put(Actions.editInvoiceSuccess())

    Toast.show({
      type: 'success',
      text1: 'Fatura editada com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.editInvoiceFailed())
  }
}

export function* deleteInvoice({ payload }) {
  const { id } = payload

  try {
    //const result = yield call(api.delete, 'api/projeto/invoices/${id}');

    yield put(Actions.deleteInvoiceSuccess(id))

    Toast.show({
      type: 'success',
      text1: 'Fatura deletada com sucesso',
      topOffset: 60
    })
  } catch(err) {
    yield put(Actions.deleteInvoiceFailed())
  }
}

export default all([
  takeLatest(Types.LOAD_INVOICES_REQUEST, loadInvoices),
  takeLatest(Types.LOAD_INVOICE_REQUEST, loadInvoice),
  takeLatest(Types.NEW_INVOICE_REQUEST, newInvoice),
  takeLatest(Types.EDIT_INVOICE_REQUEST, editInvoice),
  takeLatest(Types.DELETE_INVOICE_REQUEST, deleteInvoice),
])