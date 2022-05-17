import styles from './Slide.module.css';
import { useCallback, useEffect, useState } from 'react';
import MovieSlide from './MovieSlide';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import Load from '../components/Load';
import axios from 'axios';

// Home
const Slide = ({ movieApi }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickLeft = () => {
    if (trans >= 0) {
      // trans가 0 이상이면
      return;
    }
    setTrans((prevTrans) => prevTrans + 460);
    // 한 영화 슬라이드의 width가 460px임
  };

  const onClickRight = () => {
    if (trans <= -1380) {
      // 460 * 3 = 1380
      return;
    }
    setTrans((prevTrans) => prevTrans - 460);
  };

  const getMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(movieApi);
      setMovies(response.data.data.movies);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [movieApi]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  // 최초 한번만 API를 불러옴

  return (
    <div className={styles.container}>
      <div className={styles.slideShow}>
        {loading ? (
          <Load />
        ) : (
          <div
            className={styles.slides}
            style={{ transform: `translateX(${trans}px)` }}
          >
            {/* eslint-disable-next-line array-callback-return */}
            {movies.map((movie) => {
              if (movie.medium_cover_image != null) {
                return (
                  // MovieSlide is redering code with Slide!
                  <MovieSlide
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    title={movie.title}
                  />
                );
              }
            })}
          </div>
        )}
      </div>

      {/* Left, Right 버튼 */}
      {loading ? null : (
        <div className={styles.buttons}>
          <button className={styles.left} onClick={onClickLeft}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className={styles.right} onClick={onClickRight}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slide;
