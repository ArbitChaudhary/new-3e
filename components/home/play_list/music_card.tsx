import Image from "next/image";
import styles from "./music_card.module.scss";
import musicImage from "../../../public/music-image-1.png";
import spotify from "../../../public/music-logo.png";
import musicPlay from "../../../public/music_card_play.png";

function MusicCard() {
  return (
    <>
      {/* <div className={styles.music_card_container}>
        <div className={styles.music_card}>
          <div className={styles.music_card_left}>
            <div className={styles.music_image}>
              <Image
                src={musicImage}
                alt="Music"
                height={139}
                width={158}
               //  layout="responsive"I
              />
            </div>
            <div className={styles.music_details}>
              <div className={styles.album_name}>1. Album Name</div>
              <div className={styles.sub_text}>Lorem ipsum dolor sitLorem</div>
            </div>
          </div>
          <div className={styles.music_card_right}>
            <div className={styles.music_card_spotify}>
              <Image
                src={spotify}
                alt="spotify"
                height={40}
                width={40}
                layout="responsive"
              />
            </div>
            <div className={styles.music_card_spotify}>
              <Image
                src={musicPlay}
                alt="spotify"
                height={40}
                width={40}
               //  layout="responsive"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/78dDwp05ZJrTHcV8TRmRg6?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        //  allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1xYFjVMJZjBI7GAYo0mVb8?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default MusicCard;
