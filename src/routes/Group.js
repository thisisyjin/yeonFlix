import styles from './Group.module.css';
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieGroup from '../components/MovieGroup';
import Load from '../components/Load';
import axios from 'axios';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Group = () => {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
      );
      setMovies(response.data.data.movies);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [group, page]);

  useEffect(() => {
    getMovies();
    return;
  }, [getMovies]); // group이나 page 바뀔때마다

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieGroup
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
      {loading ? null : (
        <div className={styles.footer}>
          <div className={styles.list}>
            {List_arr.map((lst) => (
              <Link key={lst} to={`/page/${group}/${lst}`}>
                {lst}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
