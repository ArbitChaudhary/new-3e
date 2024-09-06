import Image from "next/image";
import styles from "./silver_sponsor.module.scss";

function SilverSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Silver Sponsor</div>
      <div className={styles.sponsor_logos}></div>
    </div>
  );
}

export default SilverSponsors;
