import axios from 'axios';
import Image from 'next/image';
import Meta from '../../../components/Meta';

const index = ({ movie }) => {
  return (
    <div className="container max-w-6xl mx-auto pt-4">
      <div className="px-3 flex flex-col lg:flex-row gap-8 pt-20">
        <Meta title={movie.title} description={movie.overview} />
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={800}
          className="rounded-md"
          alt={movie.title}
        />
        <div>
          <h1 className="font-bold text-xl my-2">{movie.title}</h1>
          <p className="text-gray-600 text-base mt-4">{movie.overview}</p>
          <p className="mt-5 text-gray-600 text-sm">
            Genres:{' '}
            <span className="font-bold">
              {movie.genres.map((genre) => genre.name).join(', ')}
            </span>
          </p>
          <p className="text-gray-600 text-sm">
            Release Date:{' '}
            <span className="font-bold">{movie.release_date}</span>
          </p>

          <p className="mt-5 text-gray-600 text-sm">
            {movie.spoken_languages.length > 1 ? 'Languages ' : 'Language '}:
            <span className="font-bold">
              {movie.spoken_languages
                .map((lang) => lang.english_name)
                .join(', ')}
            </span>
          </p>
          <p>
            Rating:{' '}
            {movie.vote_average > 6 ? (
              <span className="text-blue-600">
                {' '}
                {movie.vote_average.toFixed(1)}
              </span>
            ) : (
              <span className="text-red-600">
                {' '}
                {movie.vote_average.toFixed(1)}
              </span>
            )}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movie = await res.data;

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = await res.data;
  const ids = movies.results.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default index;
