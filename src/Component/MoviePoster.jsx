import React from "react";

const MoviePoster = ({ posterPath, title }) => {
  const imagePath = `https://image.tmdb.org/t/p/original${posterPath}`;
  const fallbackImage = "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-poster">
      <img
        src={posterPath ? imagePath : fallbackImage}
        alt={title}
        className="img-fluid rounded shadow"
      />
    </div>
  );
};

export default MoviePoster;
