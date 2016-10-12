import { combineReducers } from 'redux';
import TestReducer from './testReducer';
import GiphyReducer from '.giphyReducer';

const rootReducer = combineReducers({
  testReducer: TestReducer,
  giphyReducer: GiphyReducer
})

export default rootReducer
