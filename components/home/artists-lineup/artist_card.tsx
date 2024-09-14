import Image, { StaticImageData } from "next/image";
import styles from "./artists_card.module.scss";
import play from "../../../public/play.png";

interface IArtistsCard {
  image: StaticImageData;
  link?: string;
  name?: string;
  from?: string;
  to?: string;
  ampm?: string;
  url?: string;
}

function ArtistsCard({ image, link, name, from, to, ampm, url }: IArtistsCard) {
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
                <div className={styles.time}>
                  {from}-{to} {ampm}
                </div>
                <div className={styles.artist_name}>{name}</div>
              </div>
              <a href={url} target="_blank">
                <Image
                  src={play}
                  alt="play"
                  height={24}
                  width={24}
                  layout="respponsive"
                />
              </a>
            </div>
          </div>
          {/* <div className={styles.title}>{name}</div> */}
        </div>
      </div>
    </>
  );
}

export default ArtistsCard;
