import Image from "next/image";
import styles from "./sponsors.module.scss";
import sponsor1 from "../../../public/sponsor-1.png";
import sponsor2 from "../../../public/sponsor-2.png";
import sponsor3 from "../../../public/sponsor-3.png";
import sponsor4 from "../../../public/sponsor-4.png";
import sponsor5 from "../../../public/sponsor-5.png";
import sponsor6 from "../../../public/sponsor-6.png";
import sponsor7 from "../../../public/sponsor-7.png";
import sponsor8 from "../../../public/sponsor-8.png";
import sponsor9 from "../../../public/sponsor-9.png";
import sponsor10 from "../../../public/sponsor-10.png";
import sponsor11 from "../../../public/sponsor-11.png";

function Sponsors() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sponsors}>
          <div className={styles.title}>Title Sponsor: NEST Reality</div>
          <div className={styles.sponsors_list}>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor1}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor2}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
          </div>
          <div className={styles.sponsors_list}>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor3}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor4}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor5}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor6}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
          </div>
          <div className={styles.sponsors_list}>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor7}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor8}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor9}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor10}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
            <div className={styles.sponsors_logo}>
              <Image
                src={sponsor11}
                alt="Sponsor"
                height={81}
                width={120}
                style={{ objectFit: "contain", position: "relative" }}
                //  layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
