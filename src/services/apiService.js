import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODQwYjY4MjBiZDRlNGIyZWVmMmM1ZGYzYzQxMTY2MiIsIm5iZiI6MTcyOTE0ODgzOC44OTI0MDgsInN1YiI6IjYyNTdjZWJkOTkyNTljMTRmODExMjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.581vRRIFAUrV2wSjOVi8DrIGcPXOQyL8JXHRx4Boq2c";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
  timeout: 10000,
});

export const fetchMovieDetails = (movieId) => {
  return apiClient.get(`/movie/${movieId}`);
};

export const fetchMovieCast = (movieId) => {
  return apiClient.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = (movieId) => {
  return apiClient.get(`/movie/${movieId}/reviews`);
};

export const searchMovies = (query) => {
  return apiClient.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
};

export const fetchTrendingMovies = () => {
  return apiClient.get("/trending/movie/day");
};
