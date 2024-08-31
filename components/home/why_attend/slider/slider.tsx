import styles from "./slider.module.scss";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kids from "../../../../public/kids.png";
import beerGarden from "../../../../public/beer.png";
import kumari from "../../../../public/Kumari.png";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const sliderList = [
  {
    image: kids,
    title: "Kids Zone",
    desc: "A fun-filled area packed with games, activities, and entertainment designed to keep children engaged and excited throughout the festival.",
  },
  {
    image: beerGarden,
    title: "Beer Garden",
    desc: "Enjoy a selection of refreshing local and international beers in a lively outdoor setting perfect for socializing.",
  },
  {
    image: kumari,
    title: "Kumari Exhibition",
    desc: "Explore the cultural significance of the living goddess Kumari through an immersive exhibition that celebrates this unique tradition.",
  },
];

class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: "linear",
      // spacing: "20px",
      // prevArrow: <CustomPrevArrow />,
      // nextArrow: <CustomNextArrow />,

      // responsive: [
      //   {
      //     breakpoint: 1200,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      // ],
    };
    return (
      <div className={styles.container}>
        <div className={styles.slider_box}>
          <Slider {...settings}>
            {" "}
            {sliderList?.map((item, index) => (
              <div className={styles.slide_content} key={index}>
                <div className={styles.slide_image}>
                  <Image
                    src={item.image}
                    alt="Image"
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className={styles.slide_title}>
                  <div className={styles.title_text}>{item.title}</div>
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            ))}
          </Slider>{" "}
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Sliders;

// const CustomPrevArrow: React.FC = (props) => (
//   <button {...props} className={`${styles.customArrow} ${styles.prevArrow}`}>
//     <MdOutlineKeyboardArrowLeft />
//   </button>
// );

// Custom Next Arrow Component
// const CustomNextArrow: React.FC = (props) => (
//   <button {...props} className={`${styles.customArrow} ${styles.nextArrow}`}>
//     <MdOutlineArrowForwardIos />
//   </button>
// );
