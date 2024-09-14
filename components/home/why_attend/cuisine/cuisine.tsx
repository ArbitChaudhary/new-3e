import styles from "./cuisine.module.scss";
import cuisine from "../../../../public/nepalese_cuisine.png";
import Image from "next/image";

function Cuisine() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Nepalese Cuisine</div>
            <p>
              Savor the authentic flavors of Nepal with dishes like momos, dal
              bhat, sel roti, and chatamari, offering a true taste of the
              Himalayas.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={cuisine}
              alt="images"
              height={434}
              width={480}
              // fill
              layout="responsive"
              style={{ position: "relative", objectFit: "cover" }}
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

export default Cuisine;
