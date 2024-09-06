import Image from "next/image";
import styles from "./supporters.module.scss";
import supporter1 from "../../../../public/sponsor-7.png";
import supporter2 from "../../../../public/sponsor-8.png";
import supporter3 from "../../../../public/sponsor-9.png";
import supporter4 from "../../../../public/sponsor-10.png";
import supporter5 from "../../../../public/sponsor-10.png";
import supporter6 from "../../../../public/sponsor-11.png";

function Supporters() {
  return (
    <div className={styles.platinum_sponsors}>
      <div className={styles.title}>Supporters</div>
      <div className={styles.sponsor_logos}>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter1}
            alt="Sponsor Logo"
            height={96}
            width={80}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter2}
            alt="Sponsor Logo"
            height={96}
            width={80}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter3}
            alt="Sponsor Logo"
            height={80}
            width={60}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter4}
            alt="Sponsor Logo"
            height={96}
            width={80}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter5}
            alt="Sponsor Logo"
            height={96}
            width={80}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
        <div className={styles.sponsor_logo}>
          <Image
            src={supporter6}
            alt="Sponsor Logo"
            height={96}
            width={80}
            // layout="responsive"
            style={{ position: "relative", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Supporters;
