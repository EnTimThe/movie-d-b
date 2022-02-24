export const state = () => ({
  moviesData: [],
});

export const actions = {
  fetchResults(context, searchString) {
    let apiUrl = "";
    if (searchString) {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=c48bc7fbb91aa6e26856862d994a2714&query=${searchString}`;
    } else {
      apiUrl =
        "https://api.themoviedb.org/3/trending/all/day?api_key=c48bc7fbb91aa6e26856862d994a2714";
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => context.commit("updateResults", data.results));
  },
};
export const mutations = {
  updateResults(state, movies) {
    state.moviesData = movies;
  },
};

export const getters = {
  getMoviesData(state) {
    return state.moviesData;
  },
};
