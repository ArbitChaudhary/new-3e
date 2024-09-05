import VendorLogos from "./vendor_logos";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/dtfest_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import poweredBy from "../../public/powered_by_svg.svg";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <VendorLogos />
        <div className={styles.footer}>
          <div className={styles.footer_grid}>
            <div className={styles.footer_left}>
              <div className={styles.contact_us}>Contact Us</div>
              <div className={styles.email_title}>Email</div>
              <div className={styles.email}>Ashik@Ashik.io</div>
            </div>
            <div className={styles.footer_right}>
              <div className={styles.footer_logo}>
                <Image
                  src={logo}
                  alt="Logo"
                  height={120}
                  width={150}
                  layout="responsive"
                  style={{ position: "relative", objectFit: "contain" }}
                />
              </div>
              <div className={styles.social_media}>
                <FaFacebookF />
                <FaInstagram />
                <BsTwitterX />
                <CiLinkedin />
              </div>
              <div className={styles.powered_by_box}>
                <div className={styles.powered_by}>Powered By</div>
                <div className={styles.powered_by_logo}>
                  <Image
                    src={poweredBy}
                    alt="Powered By"
                    height={50}
                    width={150}
                    layout="responsive"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
