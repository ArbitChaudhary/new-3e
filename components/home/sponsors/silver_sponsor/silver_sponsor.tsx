import Image from "next/image";
import styles from "./silver_sponsor.module.scss";
import sponsor1 from "../../../../public/Silver/Bharat SUbedi.jpg";
import sponsor2 from "../../../../public/sponsor-19.png";
import sponsor3 from "../../../../public/sponsor-16.png";
import sponsor4 from "../../../../public/Silver/Himalayan Heritage.png";
import sponsor5 from "../../../../public/Silver/sumx-high.png";
import sponsor6 from "../../../../public/Silver/FILE_6460-1.png";

function SilverSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Silver Sponsor</div>
      <div className={styles.sponsor_logos}>
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
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
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor1}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor4}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor5}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor6}
              alt="Sponsor Logo"
              height={50}
              width={100}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
        </div>
        {/* <div className={styles.sponsor_logo}>
          <Image
            src={sponsor1}
            alt="Sponsor Logo"
            height={65}
            width={210}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default SilverSponsors;
