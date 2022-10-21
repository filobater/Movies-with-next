import Link from 'next/link';

import Image from 'next/image';

const MovieCard = ({ movie }) => {
  return (
    <Link href="/movie/[id]" as={`/movie/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
          <p>
            Rating:{' '}
            {movie.vote_average > 6 ? (
              <span className="text-blue-600"> {movie.vote_average}</span>
            ) : (
              <span className="text-red-600"> {movie.vote_average}</span>
            )}{' '}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
