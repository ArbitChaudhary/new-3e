import { useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./why_attend.module.scss";
import KidsZone from "./kids_zone/kids_zone";
import BeerGarden from "./beer_garden/beer_garden";
import Cuisine from "./cuisine/cuisine";
import KumariExhibition from "./kumari_exihibition/kumari_exhibition";
import KitesFestival from "./kites_festival/kites_festival";
import ArtsAndCrafts from "./arts_and_crafts/arts_and_crafts";
import DashainShopping from "./dashai_shopping/dashain_shopping";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const whyList = [
  "Kids Zone",
  "Beer Garden",
  "Nepalese Cuisine",
  "Kumari Exhibition",
  "Kite Festival",
  "Arts and Crafts Section",
  "Dashain Shopping",
];

const mainSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 0,
  // centerMode: true,
  cssEase: "linear",
};

function WhyAttend() {
  const [isActive, setIsActive] = useState<number>(0);
  const sliderRef = useRef<Slider>(null); // Ref for the Slider component

  const handleClick = (index: number) => {
    setIsActive(index);
    sliderRef.current?.slickGoTo(index); // Change the slide based on the clicked item
  };

  const handleAfterChange = (index: number) => {
    setIsActive(index); // Update isActive when the slide changes
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.why_attend}>
          <div className={styles.header}>Why Attend DT Fest 2024?</div>
          <div className={styles.list_container}>
            {whyList.map((item, index) => (
              <div
                key={index}
                className={
                  isActive === index ? styles.selected_title : styles.title
                }
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <Slider
              {...mainSettings}
              ref={sliderRef}
              afterChange={handleAfterChange} // Callback to handle slide change
              initialSlide={isActive} // Set the initial slide based on isActive
            >
              <KidsZone />
              <BeerGarden />
              <Cuisine />
              <KumariExhibition />
              <KitesFestival />
              <ArtsAndCrafts />
              <DashainShopping />
            </Slider>
          </div>
          <div className={styles.button_container}>
            <button>
              <a href="http://ticketfam.com/" target="_black">
                Book Your Ticket
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyAttend;
