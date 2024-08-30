import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import styles from "./hero.module.scss";
import logo from "../../../public/3E-Logo.png";
import circle from "../../../public/Circle-Loader.png";
import kite1 from "../../../public/kite1.png";
import kite2 from "../../../public/kite2.png";
import kite3 from "../../../public/kite3.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [isCelebrating, setIsCelebrating] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const timer = setTimeout(() => {
      setIsCelebrating(false);
    }, 5000); // Duration of 2 seconds
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div
            style={{
              position: "absolute",
              // overflow: "hidden",
              height: "20vh",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          >
            <div
            >
            </div>
          </div>
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
                <a href="http://ticketfam.com/" target="_blank">
                  <div className={styles.button_flex}>
                    <span>Get Tickets</span>
                    <Image src={circle} alt="Circle" height={40} width={40} />
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

// src/ConfettiEffect.js

interface IConfetti {
  width: number;
  height: number;
  run: boolean;
}

const ConfettiEffect = ({ width, height, run }: IConfetti) => {
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={200}
      run={run}
    />
  );
};
