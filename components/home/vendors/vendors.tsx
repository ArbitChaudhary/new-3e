import Image from "next/image";
import styles from "./vendors.module.scss";
import vendorImage from "../../../public/vendor-banner.png";
import pot from "../../../public/ClayJar .png";
import bgImage from "../../../public/bg-flower.png";
import MapplicMap from "./maplic_map";

function Vendors() {
  return (
    <>
      <div className={styles.container} id="vendor">
        <div className={styles.bg_flower}>
          <Image src={bgImage} alt="bg" fill />
        </div>
        <div className={styles.vendor}>
          <div className={styles.head}>Support & Vendor</div>
          <div className={styles.vendor_grid}>
            <div className={styles.left}>
              {/* <mapplic-map data-json="https://mapplic.com/getMapData?id=enYM9UEjC107fMcdVuI8">
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic-map> */}
              {/* <mapplic.map data-json="https://mapplic.com/getMapData?id=FAuMxQrcODG1iqqSk0Eh">
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic.map> */}
              <div className={styles.vendor_image}>
                <Image
                  src={vendorImage}
                  alt="Vendor"
                  height={564}
                  width={580}
                  layout="responsive"
                  style={{ position: "relative", objectFit: "cover" }}
                />
              </div>
              {/* <MapplicMap /> */}
              <button className={styles.vendor_map_btn}> Vendor Map</button>
              <button className={styles.vendor_application}>
                {" "}
                Vendor Application
              </button>
              <button className={styles.view_vendor_btn}>
                Veiw All Vendors{" "}
              </button>
            </div>
            <div className={styles.right}>
              <div className={styles.description}>
                Dashain Tihar Fest 2024 offers a unique chance to connect with
                the rapidly growing Nepali-speaking community in Virginia, DC,
                and Maryland. With a local population nearing 100,000, this
                event is an excellent opportunity for businesses to gain
                visibility and connect with the vibrant Nepalese and South-Asian
                community.
              </div>
              <button className={styles.performers}>
                Performer Application
              </button>
              <button className={styles.volunteer}>
                Volunteer Application
              </button>
              <button className={styles.vendor_app}>Vendor Application</button>
              <button className={styles.volunteer_support}>
                Volunteer Support
              </button>
              <button className={styles.vendor_view}>View All Vendors</button>
            </div>
          </div>
          <div className={styles.cultural_pot}>
            <Image
              src={pot}
              alt="Pot"
              height={346}
              width={149}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vendors;
