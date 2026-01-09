import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <header className={styles.disclaimer}>
      <video
        src="https://blitz-cdn-videos.blitz.gg/lol/misc/animated-demacia.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <h1>League of Legends Items - Season 2026</h1>
      <span>
        Season 2026 item updates for League of Legends including all 9 new items
        like Bandlepipes and more.
      </span>
    </header>
  );
};

export default Disclaimer;
