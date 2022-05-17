import styles from './Detail.module.css';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import Load from '../components/Load';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    setLoading(true);
    // const json = await (
    //   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    // ).json();
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      console.log(response);
      setMovie(response.data.data.movie);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <MovieDetail
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          rating={movie.rating}
          runtime={movie.runtime}
          description_full={movie.description_full}
          background_image_original={movie.background_image_original}
          title={movie.title}
          genres={movie.genres}
        />
      )}
    </div>
  );
};

export default Detail;
