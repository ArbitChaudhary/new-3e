// RotatingText.tsx
import React from "react";
import styles from "./slider.module.scss";

const Sliders: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrolling_text}>
        {" "}
        Prices go up high in 24 hours! Prices go up high in 24 hours!
      </div>
    </div>
  );
};

export default Sliders;
