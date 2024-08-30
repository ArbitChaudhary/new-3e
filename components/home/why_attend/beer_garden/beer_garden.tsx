import styles from "./beer_garden.module.scss";
import beergGrden from "../../../../public/beer.png";
import Image from "next/image";

function BeerGarden() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.kids_zone_flex}>
          <div className={styles.text_content}>
            <div className={styles.text_title}>Beer Garden</div>
            <p>
              Enjoy a selection of refreshing local and international beers in a
              lively outdoor setting perfect for socializing.
            </p>
          </div>
          <div className={styles.kids_image}>
            <Image
              src={beergGrden}
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

export default BeerGarden;
