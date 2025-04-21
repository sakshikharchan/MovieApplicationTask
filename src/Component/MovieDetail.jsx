import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCredits } from "../api";
import MoviePoster from "./MoviePoster";
import CastCard from "./CastCard";



const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchMovieDetails(id), fetchMovieCredits(id)])
      .then(([movieData, creditsData]) => {
        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 10));
      })
      .catch(() => console.error("Failed to fetch movie data or credits"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container mt-5 text-center">Loading...</div>;
  if (!movie) return <div className="container mt-5 text-center">Movie details not found!</div>;

  return (
    <div className="container mt-5 bg-light p-4 rounded shadow-sm">
      <h1 className="text-center mb-4">{movie.title}</h1>
      <div className="row">
        <div className="col-md-4">
          <MoviePoster posterPath={movie.poster_path} title={movie.title} />
        </div>
        <div className="col-md-8">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <h3 className="text-center text-dark my-4">Top Cast</h3>
      <div className="row">
        {cast.map((actor) => (
          <CastCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
