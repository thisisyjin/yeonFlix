import styles from './MovieDetail.module.css';
import PropTypes from 'prop-types';

const MovieDetail = ({
  background_image_original,
  coverImg,
  rating,
  runtime,
  description_full,
  title,
  genres,
}) => {
  return (
    <div className={styles.movie}>
      <div className={styles.background}>
        <img src={background_image_original} alt="background" />
      </div>
      <div className={styles.shortview}>
        <div className={styles.shortviewImg}>
          <img src={coverImg} alt={title} />
        </div>
        <div className={styles.shortviewText}>
          <div className={styles.titleInfo}>
            <h3 className={styles.shortviewTitle}>{title}</h3>
            <div className={styles.shortviewInfo}>
              {rating && (
                <div className={styles.rating}>{`rating: ${rating} / 10`}</div>
              )}
              {runtime && (
                <div
                  className={styles.runtime}
                >{`runtime: ${runtime} min`}</div>
              )}
              {genres && (
                <div className={styles.genres}>
                  <h4>genres</h4>
                  <ul>
                    {genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.summary}>
              {description_full &&
                (description_full.length > 450 ? (
                  <div className={styles.desc}>
                    <p>{`${description_full.slice(0, 450)} ...`}</p>
                  </div>
                ) : (
                  <div className={styles.desc}>
                    <p>{description_full}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
