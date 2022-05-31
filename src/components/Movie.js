const Movie = ({ movie }) => {
  const { title, plot, featuredImage, imDb } = movie.fields;
  return (
    <div>
      <h1>{title}</h1>
      <p>{plot}</p>
      {featuredImage && <img src={featuredImage.fields.file.url} alt="Movie" />}
      <a href={imDb}>See details of {title} on IMDb</a>
    </div>
  );
};

export default Movie;
