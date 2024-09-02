import Image from "next/image";
import ArtistsCard from "./artist_card";
import styles from "./artists_lineup.module.scss";
import bgImage from "../../../public/bg-flower.png";

function ArtistsLineup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.artists_lineup}>
          <div className={styles.bg_image}>
            <Image
              src={bgImage}
              alt="BG"
              // height={286}
              // width={286}
              // layout="responsive"
              fill
            />
          </div>
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
