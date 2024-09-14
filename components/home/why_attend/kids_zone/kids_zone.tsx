import styles from "./kids_zone.module.scss";
import kids from "../../../../public/Kid-activites.png";
import Image from "next/image";

function KidsZone() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Kids Zone</div>
            <p>
              A fun-filled area packed with games, activities, and entertainment
              designed to keep children engaged and excited throughout the
              festival.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={kids}
              alt="images"
              height={434}
              width={480}
              // fill
              layout="responsive"
              // style={{ position: "relative",  }}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* <div className={styles.button_container}>
          <button>
            <a href="http://ticketfam.com/" target="_black">
              Book Your Ticket
            </a>
          </button>
        </div> */}
      </div>
    </main>
  );
}

export default KidsZone;
