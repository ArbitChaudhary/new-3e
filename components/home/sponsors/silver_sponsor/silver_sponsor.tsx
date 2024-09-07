import Image from "next/image";
import styles from "./silver_sponsor.module.scss";
import sponsor1 from "../../../../public/sponsor-17.png";
import sponsor2 from "../../../../public/sponsor-19.png";
import sponsor3 from "../../../../public/sponsor-16.png";

function SilverSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Silver Sponsor</div>
      <div className={styles.sponsor_logos}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor2}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor3}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor1}
            alt="Sponsor Logo"
            height={65}
            width={210}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SilverSponsors;
