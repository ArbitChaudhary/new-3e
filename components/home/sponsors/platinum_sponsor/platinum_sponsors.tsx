import Image from "next/image";
import styles from "./platinum_sponsors.module.scss";
import sponsor1 from "../../../../public/sponsor-1.png";
import sponsor2 from "../../../../public/sponsor-2.png";
import sponsor3 from "../../../../public/sponsor-18.png";

function PlatinumSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Platinum Sponsor</div>
      <div className={styles.sponsor_logos}>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor1}
            alt="Sponsor Logo"
            // height={96}
            // width={80}
            fill
            // layout="responsive"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor2}
            alt="Sponsor Logo"
            // height={96}
            // width={80}
            fill
            // layout="responsive"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor3}
            alt="Sponsor Logo"
            // height={96}
            // width={80}
            fill
            // layout="responsive"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PlatinumSponsors;
