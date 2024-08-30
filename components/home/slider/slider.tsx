import styles from "./slider.module.scss";
// import vendor1 from "../../public/sponsor-1.png";
// import vendor2 from "../../public/sponsor-2.png";
// import vendor4 from "../../public/sponsor-4.png";
// import vendor5 from "../../public/sponsor-5.png";
// import Image from "next/image";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

class Sliders extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.container}>
        <div className={styles.slider_box}>
          {/* // <div className={styles.header}>Vendor Logos</div> */}
          {/* // <div className={styles.vendor_logo_list}></div> */}
          {/* <h2>Auto Play</h2>{" "} */}
          <Slider {...settings}>
            {" "}
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>Prices go up in 24 hours!</div>
            </div>
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>Prices go up in 24 hours!</div>
            </div>
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>Prices go up in 24 hours!</div>
            </div>
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>Prices go up in 24 hours!</div>
            </div>
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>
                Prices go up high in 24 hours!
              </div>
            </div>
            <div className={styles.vendor_logo}>
              <div className={styles.slide_text}>Prices go up in 24 hours!</div>
            </div>{" "}
          </Slider>{" "}
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Sliders;
