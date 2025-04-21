import React from "react";

const CastCard = ({ actor }) => {
    const imagePath = actor.profile_path
        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
        : "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="col-md-3 col-sm-4 mb-3">
            <div className="card h-100 bg-dark text-white rounded shadow-sm">
                <img
                    src={imagePath}
                    alt={actor.name}
                    className="card-img-top rounded-3"
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{actor.name}</h5>
                    <p className="text-muted">{actor.character}</p>
                </div>
            </div>
        </div>
    );
};

export default CastCard;
