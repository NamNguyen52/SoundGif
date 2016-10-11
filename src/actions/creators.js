import Type from './types'

const gifSearchRequest = (searchTerm) => ({ type: Type.SEARCH_GIPHY_API, searchTerm });

export default {
  gifSearchRequest
}
