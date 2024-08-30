import styles from "./kumari_exhibition.module.scss";
import kumari from "../../../../public/Kumari.png";
import Image from "next/image";

function KumariExhibition() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Kumari Exhibition</div>
            <p>
              Explore the cultural significance of the living goddess Kumari
              through an immersive exhibition that celebrates this unique
              tradition.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={kumari}
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

export default KumariExhibition;
