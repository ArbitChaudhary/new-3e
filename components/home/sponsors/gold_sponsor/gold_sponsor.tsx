import Image from "next/image";
import styles from "./gold_sponsor.module.scss";
import sponsor1 from "../../../../public/sponsor-3.png";
import sponsor2 from "../../../../public/sponsor-4.png";
import sponsor3 from "../../../../public/sponsor-5.png";
import sponsor4 from "../../../../public/sponsor-6.png";
import sponsor5 from "../../../../public/sponsor-12.png";
import sponsor6 from "../../../../public/sponsor-13.png";
import sponsor7 from "../../../../public/sponsor-15.png";

function GoldSponsors() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Gold Sponsor</div>
      <div className={styles.sponsor_logos}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            className={styles.sponsor_logo}
            style={{ background: "white", borderRadius: "5px" }}
          >
            <Image
              src={sponsor5}
              alt="Sponsor Logo"
              height={65}
              width={210}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsor2}
              alt="Sponsor Logo"
              height={80}
              width={120}
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
              src={sponsor6}
              alt="Sponsor Logo"
              height={80}
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

        <div className={styles.sponsor_logo}>
          <Image
            src={sponsor7}
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
