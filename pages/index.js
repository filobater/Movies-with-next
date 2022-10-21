import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import MoviesContainer from '../components/MoviesContainer';

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Hero />
      <MoviesContainer movies={movies.results} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = await res.data;

  return {
    props: {
      movies,
    },
  };
}
