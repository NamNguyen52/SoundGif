import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import Giphy from '../services/api/giphyApiService';
import Actions from '../actions/creators';

function * searchGiphy(action) {
  Giphy.search(action.searchTerm, (gifs, err) => {
    if (err) throw new Error('Error searching for GIFs');
    try {
      yield put(Actions.updateGifSearch(gifs));
    } catch(e) {
      if (e) throw new Error('Error saving searches');
    }
  });
}

export function* watchGihpySearch() {
  yield * takeEvery('SEARCH_GIPHY_API', searchGiphy);
}
