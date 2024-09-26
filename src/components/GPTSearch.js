import React from "react";
import { BG_IMG } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="w-screen h-screen fixed"
          src={BG_IMG}
          alt="background image"
        />
      </div>
      <GPTSearchBar />
      <GPTMoviesSuggestion />
    </div>
  );
};

export default GPTSearch;
