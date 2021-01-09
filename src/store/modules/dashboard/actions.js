export const Types = {
  LOAD_INVOICES_REQUEST: '@dashboard/LOAD_INVOICES_REQUEST',
  LOAD_INVOICES_SUCCESS: '@dashboard/LOAD_INVOICES_SUCCESS',
  LOAD_INVOICES_FAILED: '@dashboard/LOAD_INVOICES_FAILED',
}

export const Actions = {
  
  loadInvoicesRequest: (isRefreshing = false) => ({
    type: Types.LOAD_INVOICES_REQUEST,
    payload: { isRefreshing }
  }),
  
  loadInvoicesSuccess: (data) => ({
    type: Types.LOAD_INVOICES_SUCCESS,
    payload: { data }
  }),
  
  LOAD_INVOICES_FAILED: (err) => ({
    type: Types.LOAD_INVOICES_FAILED,
    payload: { err }
  }),
}
