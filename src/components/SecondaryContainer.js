import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="  bg-black">
      <div className=" -mt-[240px] relative z-10">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular" movies={movies.popularMovies} />
        <MoviesList title="Top Rated" movies={movies.topRatedMovies} />
        <MoviesList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
