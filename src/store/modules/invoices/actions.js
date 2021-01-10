export const Types = {
  LOAD_INVOICES_REQUEST: '@invoices/LOAD_INVOICES_REQUEST',
  LOAD_INVOICES_SUCCESS: '@invoices/LOAD_INVOICES_SUCCESS',
  LOAD_INVOICES_FAILED: '@invoices/LOAD_INVOICES_FAILED',

  FILTER_INVOICES_REQUEST: '@invoices/FILTER_INVOICES_REQUEST',
  FILTER_INVOICES_SUCCESS: '@invoices/FILTER_INVOICES_SUCCESS',
  FILTER_INVOICES_FAILED: '@invoices/FILTER_INVOICES_FAILED',
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

  filterInvoicesResquest: (filterKind) => ({
    type: Types.FILTER_INVOICES_REQUEST,
    payload: { filterKind }
  }),
}
