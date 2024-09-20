import React from 'react';
import movieimg from '../../public/images/movie.avif'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        // Making Card 
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Taking personal image because the img url was incorrect */}
            <img className="w-full h-64 object-fit" src={movieimg} alt={movie.movie} />
            <div className="p-4">
                <h3 className="text-lg font-bold">{movie.movie}</h3>
                <p className="text-sm text-gray-500">Rating: {movie.rating}</p>
                <a
                    href={movie.imdb_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline "
                >
                    View on IMDb
                </a>
            </div>
            {/* Taking id of clicked card  to open details */}
            <Link
                to={`/movies/${movie.id}`}
                className="text-blue-500 hover:underline p-4"
            >
                View Details
            </Link>
        </div>
    );
};

export default MovieCard;
