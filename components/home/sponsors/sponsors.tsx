import styles from "./sponsors.module.scss";
import Image from "next/image";
import sponsorLogo from "../../../public/nest_logo.jpeg";
import React from "react";
// import PlatinumSponsors from "./platinum_sponsor/platinum_sponsors";
// import GoldSponsors from "./gold_sponsor/gold_sponsor";
// import SilverSponsors from "./silver_sponsor/silver_sponsor";
// import Supporters from "./supporters/supporters";
// import "./App.css";

function Sponsors() {
  return (
    <div className={styles.container}>
      <div className={styles.sponsors}>
        <div className={styles.title}>Title Sponsor: NEST Reality</div>
        <div className={styles.sponsors_list}>
          <div className={styles.sponsor_logo}>
            <Image
              src={sponsorLogo}
              alt="NEST"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* <div className={styles.first}>
            <PlatinumSponsors />
          </div>
          <div className={styles.second}>
            <GoldSponsors />
            <SilverSponsors />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
