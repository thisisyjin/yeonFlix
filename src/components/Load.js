import styles from './Load.module.css';

const Load = () => {
  return (
    <div className={styles.Load}>
      <h1>
        Loading <div className={styles.typing}>. . .</div>
      </h1>
    </div>
  );
};

export default Load;
