import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setMovies(data);
          console.log(data);
          
        } else {
          setError('No movies found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No movies to display</p>
      )}
    </div>
  );
};

export default MovieList;
