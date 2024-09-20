import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieimg from '../../public/images/movie.avif'

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyapi.online/api/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Check the structure of the response
                setMovie(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching movie details:', error));
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 border shadow-2xl rounded-md shadow-gray-600 mt-10">
            <img className="w-full h-96 object-contain rounded-lg mb-6 border-gray-300 border" src={movieimg} alt={movie.title} />
            <h2 className="text-3xl font-bold mb-4">{movie.movie}</h2>
            <p className="text-gray-700 mb-4">Rating: {movie.rating}</p>
            <a
                href={movie.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline "
            >
                View on IMDb
            </a>
        </div>
    );
};

export default MovieDetails;
