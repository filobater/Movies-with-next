import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies }) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 pt-8 px-4 rounded-sm">
      <h1 className="text-white text-2xl  mb-5 text-center ">
        Movies Available
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
