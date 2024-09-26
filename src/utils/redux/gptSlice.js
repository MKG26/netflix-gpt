import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearch = !state.gptSearch;
    },

    addGeniMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGeniMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
