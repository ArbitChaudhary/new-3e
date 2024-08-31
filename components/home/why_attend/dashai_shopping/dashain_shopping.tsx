import styles from "./dashain_shopping.module.scss";
import dashain from "../../../../public/dashain.png";
import Image from "next/image";

function DashainShopping() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Dashain Shopping</div>
            <p>
              Get ready for Dashain with a special shopping section featuring
              traditional attire, festive decorations, and all your holiday
              essentials.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={dashain}
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

export default DashainShopping;
