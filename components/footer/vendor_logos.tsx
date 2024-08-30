import styles from "./vendor_logos.module.scss";
import vendor1 from "../../public/sponsor-1.png";
import vendor2 from "../../public/sponsor-2.png";
import vendor4 from "../../public/sponsor-4.png";
import vendor5 from "../../public/sponsor-5.png";
import Image from "next/image";

function VendorLogos() {
  return (
    <div className={styles.container}>
      <div className={styles.vendor_logos_box}>
        <div className={styles.header}>Vendor Logos</div>
        <div className={styles.vendor_logo_list}>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor1}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor2}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor2}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor4}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor5}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.vendor_logo}>
            <Image
              src={vendor1}
              alt="Vendor Logo"
              height={70}
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorLogos;
