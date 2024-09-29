import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addGeniMoviesResult } from "../utils/redux/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: movie1, movie2, movie3, movie4, movie5, and in the form of text";

    const response = await axios({
      url:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        process.env.REACT_APP_GEMINI_KEY,
      method: "post",
      data: {
        contents: [{ parts: [{ text: gptQuery }] }],
      },
    });

    const geniMovies =
      response.data.candidates[0].content.parts[0].text.split(",");

    const promiseArray = geniMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGeniMoviesResult({ movieNames: geniMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="p-1 pt-[50%] flex justify-center md:pt-[10%]">
      <input
        ref={searchText}
        className="w-full  md:w-2/5 py-3 px-5 rounded-full bg-opacity-80 bg-black text-white border-2 border-gray-600"
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />

      <button
        className="ml-5 bg-red-500 px-3 md:px-8 py-3 rounded-full text-xl text-black font-bold"
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </div>
  );
};

export default GPTSearchBar;
