import { Link } from 'react-router-dom';
import { Group_key_arr, Group_obj } from '../atom/NavList';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/*  Page Name */}
      <div className={styles.pageName}>
        <Link to="/">YeonFlix</Link>
      </div>

      {/* Group Links */}
      <div className={styles.groupLink}>
        {Group_key_arr.map((groupName) => {
          return (
            <div key={groupName} className={styles.Link}>
              <div className={styles.LinkSep}>
                <Link to={`/page/${Group_obj[groupName]}/1`}>{groupName}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
