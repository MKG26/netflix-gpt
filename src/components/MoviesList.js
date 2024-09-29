import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) {
    return;
  }

  return (
    <div className=" px-1 md:px-6  ">
      <h1 className="text-white text-2xl font-medium px-6">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar py-6">
        <div className="flex">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
