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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.668345329794!2d-77.32402160618663!3d38.63513037336696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b657c5359db809%3A0x863d2f3d6051facb!2sDale%20City%2C%20VA%2C%20USA!5e0!3m2!1sen!2snp!4v1725043097494!5m2!1sen!2snp"
              width="1174"
              height="475"
              style={{
                border: "0",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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