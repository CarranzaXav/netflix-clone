const API_KEY = "ad8e53b9a8cb91e34fbb9bfa48af206e";

// Tweek this for my APP
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;
