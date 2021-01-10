import Toast from 'react-native-toast-message';

import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadInvoices() {
  
  yield delay(1000)

  try {
    //const result = yield call(api.get, 'api/projeto/invoices');
    
    const data = [
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
      { cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
      { cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
      { cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
      { cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
      { cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
      { cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
      { cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
      { cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
      { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
    ]
   
    yield put(Actions.loadInvoicesSuccess(data))
  } catch(err) {
    yield put(Actions.loadInvoicesFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_INVOICES_REQUEST, loadInvoices),
])