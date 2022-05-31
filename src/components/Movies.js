import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie movie={movie} key={index} />;
      })}
    </div>
  );
};

export default Movies;
