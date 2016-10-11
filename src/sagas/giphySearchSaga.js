import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import Giphy from '../services/api/giphyApiService';

function* searchGiphy(action) {
  console.log(action.searchTerm);
  // TODO: Create service to search giphy API with user input
  // let searchResults = Giphy.search();
}

export function* watchGihpySearch() {
  yield* takeEvery('SEARCH_GIPHY_API', searchGiphy);
}
