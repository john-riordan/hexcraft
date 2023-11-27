import styles from './Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <header className={styles.disclaimer}>
      <h1>League of Legends Season 14 (2014) item changes</h1>
      <span>
        Season 14 item updates for League of legends. Item stats may be broken
        while on PBE
      </span>
    </header>
  );
};

export default Disclaimer;
