import produce from 'immer';
import { Types } from './actions';

const initialState = {
  totalDebits: null,
  paidInvoices: null,
  paidInvoicesQuantity: null,
  pendingInvoices: null,
  pendingInvoicesQuantity: null,
  
  recentInvoices: [],

  loading: false,
  refreshing: false,
}

export default function dashboard(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_INVOICES_REQUEST: {
        draft.loading = draft.totalDebits === null ? true : false
        draft.refreshing = action.payload.isRefreshing
        break;
      }
      case Types.LOAD_INVOICES_SUCCESS: {

        const {
          totalDebits,
          paidInvoices,
          paidInvoicesQuantity,
          pendingInvoices,
          pendingInvoicesQuantity,
          recentInvoices,
        } = action.payload.data

        draft.totalDebits = totalDebits
        draft.paidInvoices = paidInvoices
        draft.paidInvoicesQuantity = paidInvoicesQuantity
        draft.pendingInvoices = pendingInvoices
        draft.pendingInvoicesQuantity = pendingInvoicesQuantity
        draft.recentInvoices = recentInvoices,
        
        draft.loading = false
        draft.refreshing = false
        break;
      }
      case Types.LOAD_INVOICES_FAILED: {
        draft.loading = false
        draft.refreshing = false
        break;
      }
      default:
        break;
    }
  })
}