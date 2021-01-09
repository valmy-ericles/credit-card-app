export const Types = {
  LOAD_PROFILE_REQUEST: '@profile/LOAD_PROFILE_REQUEST',
  LOAD_PROFILE_SUCCESS: '@profile/LOAD_PROFILE_SUCCESS',
  LOAD_PROFILE_FAILED: '@profile/LOAD_PROFILE_FAILED',
}

export const Actions = {
  
  loadProfileRequest: () => ({
    type: Types.LOAD_PROFILE_REQUEST,
  }),
  
  loadProfileSuccess: (data) => ({
    type: Types.LOAD_PROFILE_SUCCESS,
    payload: { data }
  }),
  
  loadProfileFailed: (err) => ({
    type: Types.LOAD_PROFILE_FAILED,
    payload: { err }
  }),
}
