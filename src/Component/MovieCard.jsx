import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/MovieCard.css";
import Card from "./Card.jsx"

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const imageSrc = `${imagePath}${movie.poster_path}`;

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card
      imageSrc={imageSrc}
      title={movie.title}
      rating={movie.vote_average}
      onClick={handleClick}
    />
  );
};

export default MovieCard;
