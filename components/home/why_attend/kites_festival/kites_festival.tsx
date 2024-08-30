import styles from "./kites_festival.module.scss";
import kiteFest from "../../../../public/kites_fest.png";
import Image from "next/image";

function KitesFestival() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Kites Festival</div>
            <p>
              Watch the sky come alive with vibrant kites as families
              participate in this cherished Nepali tradition, symbolizing
              freedom and joy.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={kiteFest}
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
          <button>
            <a href="http://ticketfam.com/" target="_black">
              Book Your Ticket
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default KitesFestival;
