import styles from "./arts_and_crafts.module.scss";
import arts from "../../../../public/arts.png";
import Image from "next/image";

function ArtsAndCrafts() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Arts and Crafts Scetion</div>
            <p>
              Discover handmade crafts, traditional artwork, and unique
              souvenirs that showcase the creativity and craftsmanship of Nepali
              artisans.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={arts}
              alt="images"
              height={434}
              width={480}
              // fill
              layout="responsive"
              style={{ position: "relative", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.button_container}>
          <button>Book Your Ticket</button>
        </div>
      </div>
    </main>
  );
}

export default ArtsAndCrafts;
