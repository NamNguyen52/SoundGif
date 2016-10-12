import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import Giphy from '../services/api/giphyApiService';

function* searchGiphy(action) {
  Giphy.search(action.searchTerm, gifs => console.log(gifs))
}

export function* watchGihpySearch() {
  yield* takeEvery('SEARCH_GIPHY_API', searchGiphy);
}
