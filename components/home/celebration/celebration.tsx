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
            {/* <div className={styles.celebration_image}>
              <Image
                src={celbration}
                alt={"image"}
                height={812}
                width={375}
                // fill
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
            </div> */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Animation />
            </div>
            <div className={styles.celebration_content}>
              <span>Welcome to DT Fest 2024</span>
              <div>A Celebration Of Nepali Culture!</div>
              <p className="">
                DT Fest 2024 is the premier annual celebration of Nepali
                culture, brought to life by 3E Entertainment, a leader in
                organizing significant events for the Nepalese community in the
                DMV area. This year&apos;s festival promises to be a vibrant
                showcase of Nepal&apos;s rich heritage, featuring an eclectic
                mix of vendors, skilled artisans, talented musicians, and
                dynamic dancers. Attendees will be immersed in the beauty of
                Nepalese culture through traditional dances, enchanting
                instrumental performances, and an array of authentic Nepalese
                products, artwork, and culinary delights. With the festival
                coinciding with the festive spirit of Dashain and Tihar, our
                youthful and dynamic team has been meticulously assembled to
                curate an unforgettable experience, ensuring that DT Fest 2024
                is an event to remember for all who attend.
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
