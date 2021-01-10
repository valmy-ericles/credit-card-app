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

  EIDT_INVOICE_REQUEST: '@invoices/EIDT_INVOICE_REQUEST',
  EIDT_INVOICE_SUCCESS: '@invoices/EIDT_INVOICE_SUCCESS',
  EIDT_INVOICE_FAILED: '@invoices/EIDT_INVOICE_FAILED',

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
    type: Types.EIDT_INVOICE_REQUEST,
    payload: { paid, creditCard, dueDate, value }
  }),

  editInvoiceSuccess: () => ({
    type: Types.EIDT_INVOICE_SUCCESS,
  }),

  editInvoiceFailed: (err) => ({
    type: Types.EIDT_INVOICE_FAILED,
    payload: { err }
  }),


  filterInvoicesResquest: (filterKind) => ({
    type: Types.FILTER_INVOICES_REQUEST,
    payload: { filterKind }
  }),
}
