import Image from "next/image";
import styles from "./play_list.module.scss";
import logo from "../../../public/dtfest_logo.png";
import MusicCard from "./music_card";

function PlayList() {
  return (
    <div>
      <div>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Logo"
                width={102}
                height={80}
                layout="responsive"
                style={{ objectFit: "contain", position: "relative" }}
              />
            </div>
            <div className={styles.top_texts}>
              <span>DT Fest 2024</span>
              <span>Listen to our official playlist</span>
            </div>
          </div>
          {/* <div className={styles.top_right}>
            <span>Playlist Settings</span>
            <div className={styles.playlist_setting}>
              <Image
                src={playSetting}
                alt="Settngs"
                height={45}
                width={45}
                style={{ position: "relative" }}
              />
            </div>
          </div> */}
        </div>
        <div className={styles.bottom}>
          <MusicCard />
        </div>

        {/* <div className={styles.bottom}>
          <div className={styles.bottom_left}>
            <div className={styles.banner}>
              <Image
                src={musicBanner}
                alt="Banner"
                height={534}
                width={525}
                layout="responsive"
              />
            </div>
            <button className={styles.update_playlist}>Update Playlist</button>
            <div className={styles.bottom_left_spotify}>
              <button className={styles.button_flex}>
                <div className={styles.button_logo}>
                  <Image
                    src={spotify}
                    alt="Spotify"
                    height={44}
                    width={44}
                    layout="responsive"
                    style={{ position: "relative" }}
                  />
                </div>
                <div>Open in Spotify</div>
              </button>
              <div className={styles.more}>
                <Image
                  src={moreIcon}
                  alt="More"
                  height={40}
                  width={10}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom_right}>
            <div className={styles.audio_journey}>Audio Journey</div>
            <div className={styles.music_list}>
              <div className={styles.scroll}>
                <MusicCard />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PlayList;
