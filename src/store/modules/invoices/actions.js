export const Types = {
  LOAD_INVOICES_REQUEST: '@invoices/LOAD_INVOICES_REQUEST',
  LOAD_INVOICES_SUCCESS: '@invoices/LOAD_INVOICES_SUCCESS',
  LOAD_INVOICES_FAILED: '@invoices/LOAD_INVOICES_FAILED',

  LOAD_INVOICE_REQUEST: '@invoices/LOAD_INVOICE_REQUEST',
  LOAD_INVOICE_SUCCESS: '@invoices/LOAD_INVOICE_SUCCESS',
  LOAD_INVOICE_FAILED: '@invoices/LOAD_INVOICE_FAILED',

  NEW_INVOICE_REQUEST: '@invoices/NEW_INVOICE_REQUEST',
  NEW_INVOICE_SUCCESS: '@invoices/NEW_INVOICE_SUCCESS',
  NEW_INVOICE_FAILED: '@invoices/NEW_INVOICE_FAILED',

  EDIT_INVOICE_REQUEST: '@invoices/EDIT_INVOICE_REQUEST',
  EDIT_INVOICE_SUCCESS: '@invoices/EDIT_INVOICE_SUCCESS',
  EDIT_INVOICE_FAILED: '@invoices/EDIT_INVOICE_FAILED',

  DELETE_INVOICE_REQUEST: '@invoices/DELETE_INVOICE_REQUEST',
  DELETE_INVOICE_SUCCESS: '@invoices/DELETE_INVOICE_SUCCESS',
  DELETE_INVOICE_FAILED: '@invoices/DELETE_INVOICE_FAILED',

  FILTER_INVOICES_REQUEST: '@invoices/FILTER_INVOICES_REQUEST',
}

export const Actions = {
  loadInvoicesResquest: () => ({
    type: Types.LOAD_INVOICES_REQUEST
  }),
  
  loadInvoicesSuccess: (data) => ({
    type: Types.LOAD_INVOICES_SUCCESS,
    payload: { data }
  }),

  loadInvoicesFailed: (err) => ({
    type: Types.LOAD_INVOICES_FAILED,
    payload: { err }
  }),

  
  loadInvoiceResquest: (id) => ({
    type: Types.LOAD_INVOICE_REQUEST,
    payload: { id }
  }),
  
  loadInvoiceSuccess: (paid, creditCard, dueDate, value) => ({
    type: Types.LOAD_INVOICE_SUCCESS,
    payload: { paid, creditCard, dueDate, value }
  }),

  loadInvoiceFailed: (err) => ({
    type: Types.LOAD_INVOICE_FAILED,
    payload: { err }
  }),



  newInvoiceResquest: (paid, creditCard, dueDate, value) => ({
    type: Types.NEW_INVOICE_REQUEST,
    payload: { paid, creditCard, dueDate, value }
  }),

  newInvoiceSuccess: () => ({
    type: Types.NEW_INVOICE_SUCCESS,
  }),

  newInvoiceFailed: (err) => ({
    type: Types.NEW_INVOICE_FAILED,
    payload: { err }
  }),


  editInvoiceResquest: (paid, creditCard, dueDate, value) => ({
    type: Types.EDIT_INVOICE_REQUEST,
    payload: { paid, creditCard, dueDate, value }
  }),

  editInvoiceSuccess: () => ({
    type: Types.EDIT_INVOICE_SUCCESS,
  }),

  editInvoiceFailed: (err) => ({
    type: Types.EDIT_INVOICE_FAILED,
    payload: { err }
  }),


  deleteInvoiceResquest: (id) => ({
    type: Types.DELETE_INVOICE_REQUEST,
    payload: { id }
  }),

  deleteInvoiceSuccess: (id) => ({
    type: Types.DELETE_INVOICE_SUCCESS,
    payload: { id }
  }),

  deleteInvoiceFailed: (err) => ({
    type: Types.DELETE_INVOICE_FAILED,
    payload: { err }
  }),


  filterInvoicesResquest: (filterKind) => ({
    type: Types.FILTER_INVOICES_REQUEST,
    payload: { filterKind }
  }),
}
