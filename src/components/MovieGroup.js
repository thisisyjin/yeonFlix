import styles from './MovieGroup.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieGroup = ({
  id,
  coverImg,
  title,
  rating,
  runtime,
  year,
  summary,
}) => {
  return (
    <div className={styles.movie}>
      <div className={styles.layout}>
        <div className={styles.shortview}>
          <div className={styles.shortviewImg}>
            <img src={coverImg} alt={title} />
          </div>
          <div className={styles.shortviewText}>
            <div className={styles.shortviewTitle}>
              <h3>
                <Link to={`/movie/${id}`}>
                  {title.length > 35 ? `${title.slice(0, 35)}...` : title}
                </Link>
              </h3>
            </div>
            <div className={styles.shortviewInfo}>
              <div className={styles.year}>{year && `year: ${year}`}</div>
              <div className={styles.rating}>
                {rating && `rating: ${rating} / 10`}
              </div>
              <div className={styles.runtime}>
                {runtime && `runtime: ${runtime} min`}
              </div>
              <div className={styles.desc}>
                {summary
                  ? summary.length > 140
                    ? `${summary.slice(0, 140)}...`
                    : summary
                  : 'no summary data'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieGroup.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  summary: PropTypes.string,
};

export default MovieGroup;
