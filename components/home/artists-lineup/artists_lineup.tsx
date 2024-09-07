import Image from "next/image";
import ArtistsCard from "./artist_card";
import styles from "./artists_lineup.module.scss";
import bgImage from "../../../public/bg-flower.png";
import artist1 from "../../../public/artist2.png";
import artist2 from "../../../public/artist3.png";
import artist3 from "../../../public/artist4.png";
import artist4 from "../../../public/artist5.png";
import artist5 from "../../../public/astist7.png";

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
            <ArtistsCard image={artist1} />
            <ArtistsCard image={artist2} />
            <ArtistsCard image={artist3} />
            <ArtistsCard image={artist4} />
            <ArtistsCard image={artist5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistsLineup;
