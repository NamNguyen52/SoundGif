import Type from './types'

const gifSearchRequest = (searchTerm) => ({ type: Type.SEARCH_GIPHY_API, searchTerm });

const updateGifSearch = (searchResults) => ({type: Type.UPDATE_GIF_SEARCH_RESULTS, searchResults });

export default {
  gifSearchRequest
}
