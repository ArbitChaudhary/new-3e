// RotatingText.tsx
import React from "react";
import styles from "./slider.module.scss";

const Sliders: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrolling_text}> Prices Increase Soon!</div>
    </div>
  );
};

export default Sliders;
