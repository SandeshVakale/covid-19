import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reverse } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dayOneRequest: ['slug'],
  dayOneSuccess: ['payload'],
  dayOneFailure: null
})

export const DayOneTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const DayOneSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload: payload.reverse() })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DAY_ONE_REQUEST]: request,
  [Types.DAY_ONE_SUCCESS]: success,
  [Types.DAY_ONE_FAILURE]: failure
})
