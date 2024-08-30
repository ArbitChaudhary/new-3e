import styles from "./cuisine.module.scss";
import cuisine from "../../../../public/cuisine.png";
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
        <div className={styles.button_container}>
          <button>Book Your Ticket</button>
        </div>
      </div>
    </main>
  );
}

export default Cuisine;
