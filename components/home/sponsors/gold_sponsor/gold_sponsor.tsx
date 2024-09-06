import Image from "next/image";
import styles from "./gold_sponsor.module.scss";
import sponsor1 from "../../../../public/sponsor-3.png";
import sponsor2 from "../../../../public/sponsor-4.png";
import sponsor3 from "../../../../public/sponsor-5.png";
import sponsor4 from "../../../../public/sponsor-6.png";

function GoldSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Gold Sponsor</div>
      <div className={styles.sponsor_logos}>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor1}
            alt="Sponsor Logo"
            height={80}
            width={90}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor4}
            alt="Sponsor Logo"
            height={80}
            width={60}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor2}
            alt="Sponsor Logo"
            height={80}
            width={90}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor3}
            alt="Sponsor Logo"
            height={80}
            width={90}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default GoldSponsors;
