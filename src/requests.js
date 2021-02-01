const API_KEY = "44f277248340c7b49d1c710ac4bd113e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
