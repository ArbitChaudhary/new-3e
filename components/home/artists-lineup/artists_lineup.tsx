import ArtistsCard from "./artist_card";
import styles from "./artists_lineup.module.scss";
function ArtistsLineup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.artists_lineup}>
          <h1 className={styles.header}> 2024 Artists lineup </h1>
          <div className={styles.artist_flex}>
            <ArtistsCard />
            <ArtistsCard />
            <ArtistsCard />
            <ArtistsCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistsLineup;
