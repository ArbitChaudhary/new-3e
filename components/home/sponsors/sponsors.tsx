import styles from "./sponsors.module.scss";
import vendor1 from "../../../public/sponsor-1.png";
import vendor2 from "../../../public/sponsor-2.png";
import vendor4 from "../../../public/sponsor-4.png";
import vendor5 from "../../../public/sponsor-5.png";
import Image from "next/image";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

class Sponsors extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.container}>
        <div className={styles.sponsors}>
          <div className={styles.title}>Title Sponsor: NEST Reality</div>
          <div className={styles.sponsors_list}>
            {/* <h2>Auto Play</h2>{" "} */}
            <Slider {...settings}>
              {" "}
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
              </div>{" "}
            </Slider>{" "}
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Sponsors;
