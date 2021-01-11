import produce from 'immer';
import { Types } from './actions';

const initialState = {
  allInvoices: [],
  filteredInvoices: [],

  invoice: {
    paid: false,
    creditCard: null,
    dueDate: null,
    value: null
  },

  loading: false,
  loadingInvoice: false,
  creatingNewInvoice: false,
  editingInvoice: false,
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_INVOICES_REQUEST: {
        draft.loading = (draft.allInvoices.length === 0 ? true : false)
        break;
      }
      case Types.LOAD_INVOICES_SUCCESS: {
        const { data } = action.payload

        draft.allInvoices = data
        draft.filteredInvoices = data
        draft.loading = false
        break;
      }
      case Types.LOAD_INVOICES_FAILED: {
        draft.loading = false
        break;
      }
      case Types.LOAD_INVOICE_REQUEST: {
        draft.loadingInvoice = true
        break;
      }
      case Types.LOAD_INVOICE_SUCCESS: {
        console.log(action.payload)
        
        const { paid, creditCard, dueDate, value } = action.payload
        
        draft.invoice.paid = paid
        draft.invoice.creditCard = creditCard
        draft.invoice.dueDate = dueDate
        draft.invoice.value = value

        draft.loadingInvoice = false
        break;
      }
      case Types.LOAD_INVOICE_FAILED: {
        draft.loadingInvoice = false
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
      case Types.NEW_INVOICE_REQUEST: {
        draft.creatingNewInvoice = true
        break;
      }
      case Types.NEW_INVOICE_SUCCESS: {
        draft.creatingNewInvoice = false
        break;
      }
      case Types.NEW_INVOICE_FAILED: {
        draft.creatingNewInvoice = false
        break;
      }
      case Types.EDIT_INVOICE_REQUEST: {
        draft.editingInvoice = true
        break;
      }
      case Types.EDIT_INVOICE_SUCCESS: {
        draft.editingInvoice = false
        break;
      }
      case Types.EDIT_INVOICE_FAILED: {
        draft.editingInvoice = false
        break;
      }
      case Types.DELETE_INVOICE_REQUEST: {
        break;
      }
      case Types.DELETE_INVOICE_SUCCESS: {
        const { id } = action.payload

        const index = draft.filteredInvoices.findIndex(invoice => invoice.id === id)
        if(index !== -1) draft.filteredInvoices.splice(index, 1)
        break;
      }
      case Types.DELETE_INVOICE_FAILED: {
        break;
      }
      default:
        break;
    }
  })
}