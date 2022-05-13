import styles from './MovieSlide.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieSlide = ({ id, coverImg, rating, runtime, title }) => {
  return (
    <div className={styles.movie}>
      <div className={styles.coverImg}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>

      <div className={styles.text}>
        <div className={styles.title}>
          <h3>
            <Link to={`/movie/${id}`}>
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </Link>
          </h3>
        </div>
        <div className={styles.info}>
          <span>{rating && `rating: ${rating} / 10`}</span>
          <span>{runtime && `runtime: ${runtime} min`}</span>
        </div>
      </div>
    </div>
  );
};

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieSlide;
