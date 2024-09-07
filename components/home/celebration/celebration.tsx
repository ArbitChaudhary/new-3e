import styles from "./celebration.module.scss";
import celbration from "../../../public/culturelDance.png";
import Image from "next/image";
import bgFlower from "../../../public/bg-flower.png";
import Animation from "./slider";
// import ImageSwapper from "./swipper";
// import image1 from "../../../public/3E-Logo.png";
// import image2 from "../../../public/Banner.png";

function Celebration() {
  return (
    <main>
      <div className={styles.container} id="festivals">
        <div className={styles.celebration}>
          <div className={styles.celebration_flex}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Animation />
            </div>
            <div className={styles.celebration_content}>
              <span>Welcome to DT Fest 2024</span>
              <div>A Celebration Of Nepali Culture!</div>
              <p className="">
                DT Fest 2024 is a vibrant celebration of Nepali culture,
                featuring a mix of vendors, artisans, musicians, and dancers.
                Attendees can enjoy traditional dances, live performances, and
                authentic Nepalese products, art, and cuisine.
              </p>
            </div>
            <div className={styles.bg_flower}>
              <Image
                src={bgFlower}
                alt="Bg"
                height={200}
                width={200}
                layout="responsive"
                style={{ objectFit: "contain", position: "relative" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Celebration;
