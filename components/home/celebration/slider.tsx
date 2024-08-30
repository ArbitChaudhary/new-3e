import styles from "./celebration.module.scss";
import dance1 from "../../../public/dance1.png";
import dance2 from "../../../public/dance2.png";
import dance3 from "../../../public/dance3.png";
import dance4 from "../../../public/dance4.png";
import Image from "next/image";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

class Animation extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      fade: true,
      waitForAnimate: false,
      // cssEase: "l",
      // lazyLoad: "progressive",
      // responsive: [
      //   {
      //     breakpoint: 1200,
      //     settings: {
      //       slidesToShow: 5,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 6,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 5,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 400,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      // ],
    };
    return (
      <div className={styles.container_ani}>
        {/* <div className={styles.sponsors}> */}
        {/* <div className={styles.title}>Title Sponsor: NEST Reality</div> */}
        {/* <div className={styles.sponsors_list}> */}
        {/* <h2>Auto Play</h2>{" "} */}
        <Slider {...settings}>
          {" "}
          <div className={styles.celebration_image}>
            <Image
              src={dance1}
              alt={"image"}
              height={812}
              //   width={375}
              // fill
              layout="responsive"
              style={{ objectFit: "cover", position: "relative" }}
            />
          </div>
          <div className={styles.celebration_image}>
            <Image
              src={dance2}
              alt={"image"}
              height={812}
              //   width={375}
              // fill
              layout="responsive"
              style={{ objectFit: "cover", position: "relative" }}
            />
          </div>
          <div className={styles.celebration_image}>
            <Image
              src={dance3}
              alt={"image"}
              height={812}
              //   width={375}
              // fill
              layout="responsive"
              style={{ objectFit: "cover", position: "relative" }}
            />
          </div>
          <div className={styles.celebration_image}>
            <Image
              src={dance4}
              alt={"image"}
              height={812}
              //   width={375}
              // fill
              layout="responsive"
              style={{ objectFit: "cover", position: "relative" }}
            />
          </div>
          {/* <div className={styles.vendor_logo}> */}
          <div className={styles.celebration_image}>
            <Image
              src={dance2}
              alt={"image"}
              height={812}
              //   width={375}
              // fill
              layout="responsive"
              style={{ objectFit: "cover", position: "relative" }}
            />
          </div>
        </Slider>{" "}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Animation;
