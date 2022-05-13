import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Slide from '../components/Slide';
import { ImPlay } from 'react-icons/im';
import { Group_obj, Group_key_arr } from '../atom/NavList';

const Home = () => {
  return (
    <div className={styles.container}>
      {Group_key_arr.map((group) => (
        <div key={group} className={styles.slideBox}>
          <div className={styles.title}>
            <Link
              to={`/page/${Group_obj[group]}/1`}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <ImPlay />
              <h3>{group}</h3>
            </Link>
          </div>
          <Slide
            movieApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
          />
        </div>
      ))}
      <div className={styles.footer}>
        <div className={styles.author}>
          <h4>thisisyjin</h4>
        </div>
        <ul className={styles.links}>
          <li>
            <a href="https://github.com/thisisyjin">githubs</a>
          </li>
          <li>
            <a href="https://mywebproject.tistory.com">dev log</a>
          </li>
          <li>
            <a href="mailto:thisisyjin@naver.com">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
