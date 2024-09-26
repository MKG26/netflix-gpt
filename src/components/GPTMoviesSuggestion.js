import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMoviesSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return;

  return (
    <div className="mt-10 bg-black bg-opacity-90 text-white">
      <div className="py-8">
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMoviesSuggestion;
