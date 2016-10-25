import Types from '../actions/types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

const INITIAL_STATE = Immutable({ results: [] })

const updateGifSearchResults = (state, action) =>
  state.set("results", action.searchResults)

const ACTION_HANDLERS = {
  [Types.UPDATE_GIF_SEARCH_RESULTS]: updateGifSearchResults
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
