import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];

  return (
    <div>
      <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
