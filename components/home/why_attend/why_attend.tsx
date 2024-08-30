import { useState } from "react";
import styles from "./why_attend.module.scss";
import KidsZone from "./kids_zone/kids_zone";
import BeerGarden from "./beer_garden/beer_garden";
import Cuisine from "./cuisine/cuisine";
import KumariExhibition from "./kumari_exihibition/kumari_exhibition";
import KitesFestival from "./kites_festival/kites_festival";
import ArtsAndCrafts from "./arts_and_crafts/arts_and_crafts";
import DashainShopping from "./dashai_shopping/dashain_shopping";

const whyList = [
  "Kids Zone",
  "Beer Garden",
  "Nepalese Cuisine",
  " Kumari Exihibition",
  "Kite Festival",
  "Arts and Crafts Section",
  "Dashain Shopping",
];

function WhyAttend() {
  const [isActive, setIsActive] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsActive(index);
  };
  console.log(isActive);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.why_attend}>
          <div className={styles.header}>Why Attend DT Fest 2024?</div>
          <div className={styles.list_container}>
            {whyList?.map((item, index) => (
              <>
                <div
                  key={index}
                  className={
                    isActive === index ? styles.selected_title : styles.title
                  }
                  onClick={() => handleClick(index)}
                >
                  {item}
                </div>
              </>
            ))}
          </div>
          <div style={{ marginTop: "75px" }}>
            {isActive === 0 && <KidsZone />}
            {isActive === 1 && <BeerGarden />}
            {isActive === 2 && <Cuisine />}
            {isActive === 3 && <KumariExhibition />}
            {isActive === 4 && <KitesFestival />}
            {isActive === 5 && <ArtsAndCrafts />}
            {isActive === 6 && <DashainShopping />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyAttend;
