import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import styles from "./hero.module.scss";
import kite1 from "../../../public/kite1.png";
import kite2 from "../../../public/kite2.png";
import kite3 from "../../../public/kite3.png";
import ticketCard from "../../../public/ticket-logo.png";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.banner}>
            <div className={styles.kite_box}>
              <div className={styles.kite1}>
                <Image
                  src={kite2}
                  alt="Kite"
                  height={79}
                  width={48}
                  style={{ objectFit: "contain", position: "relative" }}
                />
              </div>
              <div className={styles.kite2}>
                <Image
                  src={kite3}
                  alt="Kite"
                  height={79}
                  width={48}
                  style={{ objectFit: "contain", position: "relative" }}
                />
              </div>
              <div className={styles.kite3}>
                <Image
                  src={kite1}
                  alt="Kite"
                  height={79}
                  width={48}
                  style={{ objectFit: "contain", position: "relative" }}
                />
              </div>
            </div>
            <div className={styles.banner_join_date}>
              Join us on October 5, 2024
            </div>
            <div className={styles.banner_address}>Manassas Fairgrounds</div>
            <div className={styles.banner_button}>
              <button className={styles.banner_ticket_button}>
                <a
                  href="https://www.ticketfam.com/dt-fest-2024-659624038"
                  target="_blank"
                >
                  <div className={styles.button_flex}>
                    <span>Get Tickets</span>
                    <Image
                      src={ticketCard}
                      alt="Circle"
                      height={40}
                      width={35}
                      // layout="responsive"
                      style={{ position: "relative", objectFit: "contain" }}
                    />
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
