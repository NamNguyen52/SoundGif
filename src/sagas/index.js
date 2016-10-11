import { fork } from 'redux-saga/effects';
import { watchGihpySearch } from './giphySearchSaga';

export default function* root () {
  yield fork(watchGihpySearch)
}
