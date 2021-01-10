import produce from 'immer';
import { Types } from './actions';

const initialState = {
  allInvoices: [],
  filteredInvoices: [],

  loading: false,
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_INVOICES_REQUEST: {
        draft.loading = true
        break;
      }
      case Types.LOAD_INVOICES_SUCCESS: {
        const { data } = action.payload

        draft.allInvoices = data
        draft.filteredInvoices = data
        break;
      }
      case Types.LOAD_INVOICES_FAILED: {
        draft.loading = false
        break;
      }
      case Types.FILTER_INVOICES_REQUEST: {
        const { filterKind } = action.payload
        
        if(filterKind === 'all') {
          draft.filteredInvoices = draft.allInvoices
          break;
        }

        let paid = false;

        if(filterKind === 'paid') {
          paid = true
        }
        
        draft.filteredInvoices = draft.allInvoices.filter(item => item.paid === paid)
        break;
      }
      default:
        break;
    }
  })
}