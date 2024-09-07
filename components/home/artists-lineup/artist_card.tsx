import Image, { StaticImageData } from "next/image";
import styles from "./artists_card.module.scss";
import artist from "../../../public/artists-1.png";
import play from "../../../public/video-play.png";

interface IArtistsCard {
  image: StaticImageData;
}

function ArtistsCard({ image }: IArtistsCard) {
  return (
    <>
      <div className={styles.artists_container}>
        <div className={styles.container}>
          <Image
            src={image}
            alt="Artist"
            // height={192}
            // width={224}
            fill
            style={{ borderRadius: "16px", objectFit: "cover" }}
            // layout="responsive"
          />
          <div className={styles.text_box_container}>
            <div className={styles.text_box}>
              <div className={styles.detail_content}>
                <div className={styles.time}>12:00</div>
                <div className={styles.artist_name}>{""}</div>
              </div>
              <Image
                src={play}
                alt="play"
                height={30}
                width={30}
                layout="respponsive"
              />
            </div>
          </div>
          <div className={styles.title}>Lorem Ipsum</div>
        </div>
      </div>
    </>
  );
}

export default ArtistsCard;
