const API_KEY = process.env.REACT_APP_API_KEY;
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_related?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchKDrama: `/discover/tv?api_key=${API_KEY}&with_origin_country=KR&language=en-US&page=1`,
    fetchCDrama: `/discover/tv?api_key=${API_KEY}&with_origin_country=CN&language=en-US&page=1`,
    fetchBollywood: `/discover/movie?api_key=${API_KEY}&region=IN&language=en-US&page=1`,
    fetchAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_origin_country=JP&language=en-US&page=1`

}
export default requests;