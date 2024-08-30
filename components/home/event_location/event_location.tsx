import Image from "next/image";
import styles from "./event_location.module.scss";
import map from "../../../public/Figmap.png";
import UpcomingEvents from "./upcoming_events";
import FAQ from "../faq/faq";

function EventLocation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.event_location}>
          <div className={styles.header}>Event Location</div>
          <div className={styles.address_flex}>
            <div className={styles.venue_address}>Venue Address:</div>
            <div className={styles.address}>
              10624 Dumfries Rd, Manassas, Virginia 20112, United States
            </div>
          </div>
          <div className={styles.map}>
            <Image
              src={map}
              alt="Map"
              height={475}
              width={1174}
              layout="responsive"
              style={{ position: "relative" }}
            />
          </div>
          <div className={styles.button_flex}>
            <button>Get Directions</button>
          </div>
        </div>
        <UpcomingEvents />
        <FAQ />
      </div>
    </>
  );
}

export default EventLocation;
