import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* loadInvoices() {
  
  yield delay(2000)

  try {
    //const result = yield call(api.get, 'api/projeto/invoices');
    
    const data = { 
      totalDebits: '4945,60',
      paidInvoices: '3245,00',
      paidInvoicesQuantity: '16',
      pendingInvoices: '342,20',
      pendingInvoicesQuantity: '2',
      recentInvoices: [
        { id: 1, cardName: 'Nubank', dueDate: '22/01/2021', totalValue: '100,00', paid: true },
        { id: 2, cardName: 'Itaú', dueDate: '20/02/2021', totalValue: '50,00', paid: false },
        { id: 3, cardName: 'Bradesco', dueDate: '02/02/2021', totalValue: '86,50', paid: false },
        { id: 4, cardName: 'Banco do Brasil', dueDate: '22/01/2021', totalValue: '26,50', paid: true },
        { id: 5, cardName: 'Next', dueDate: '09/01/2021', totalValue: '63,00', paid: false },
      ]     
    }

    yield put(Actions.loadInvoicesSuccess(data))   
  } catch(err) {
    yield put(Actions.loadInvoicesFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_INVOICES_REQUEST, loadInvoices),
])