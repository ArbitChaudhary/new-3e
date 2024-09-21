import Image from "next/image";
import ArtistsCard from "./artist_card";
import styles from "./artists_lineup.module.scss";
import bgImage from "../../../public/bg-flower.png";
import artist1 from "../../../public/nima-rumba.jpg";
import artist2 from "../../../public/pramod-kharel.jpg";
import artist4 from "../../../public/artist5.png";
import artist5 from "../../../public/astist7.png";
import artist6 from "../../../public/Milan.webp";

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
            <ArtistsCard
              image={artist5}
              name="Samrat & Band"
              from="5:00"
              to="5:30"
              ampm="PM"
              url="https://www.youtube.com/channel/UC3PcqVFsbJUSofqNT7njPpg"
            />
            <ArtistsCard
              image={artist4}
              name="AZTRA Band"
              from="5:30"
              to="6:00"
              ampm="PM"
              url="https://www.facebook.com/reel/845682800460113"
            />
            <ArtistsCard
              image={artist6}
              name="Milan Newar"
              from="6:30"
              to="7:15"
              ampm="PM"
              url="https://www.youtube.com/c/devithanmusic"
            />
            <ArtistsCard
              image={artist2}
              name="Pramod Kharel"
              from="7:15"
              to="8:00"
              ampm="PM"
              url="https://www.youtube.com/singerpramodkharel"
            />
            <ArtistsCard
              image={artist1}
              name="Nima Rumba & Band"
              from="8:00"
              to="9:00"
              ampm="PM"
              url="https://www.youtube.com/c/nimarumba"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistsLineup;
