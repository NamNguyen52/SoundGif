const GIPHY_KEY = 'dc6zaTOxFJmzC';

// giphy search api call
const search = (searchTerm, cb) => {
  let preppedSearchTerm = cleanSearchTerm(searchTerm);
  let giphySearchEndPoint = `http://api.giphy.com/v1/gifs/search?q=${preppedSearchTerm}&api_key=${GIPHY_KEY}`;
  fetch(giphySearchEndPoint)
    .then((res) => {
      return res.json();
    })
    .then((gifs) => {
      cb(gifs);
    })
    .catch((err) => {
      if (err) { console.log(err) }
    })
};

// replace spaces in user's search
const cleanSearchTerm = (searchTerm) => {
  return searchTerm.replace(/ /g, "+");
};

export default {
  search
};
