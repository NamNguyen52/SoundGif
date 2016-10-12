import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import Giphy from '../services/api/giphyApiService';

function* searchGiphy(action) {
  Giphy.search(action.searchTerm, (gifs, err) => console.log(gifs))
  // TODO: Create action to dispatch search results
}

export function* watchGihpySearch() {
  yield* takeEvery('SEARCH_GIPHY_API', searchGiphy);
}
