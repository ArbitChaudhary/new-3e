import React, { useEffect, useRef, useState } from "react";
import styles from "./swiper.module.scss";
import { title } from "process";
import Slider from "react-slick";

interface SliderProps {
  title: string[];
  content: React.ReactElement[];
}

function ContentSlider({ title, content }: SliderProps) {
  const [activeIndex, setAactiveIndex] = useState<number>(0);
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleClick = (index: number) => {
    setAactiveIndex(index);
    sliderRef2.current?.slickGoTo(index);
  };

  const handleAfterChange = (index: number) => {
    setAactiveIndex(index); // Update isActive when the slide changes
  };
  return (
    <div>
      <div className={styles.list_container}>
        {title.map((item, index) => (
          <Slider
            asNavFor={nav1 ?? undefined}
            ref={sliderRef2}
            slidesToShow={1}
            infinite={false}
            variableWidth
            arrows={false}
          >
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={
                activeIndex === index ? styles.selected_title : styles.title
              }
            >
              {item}
            </div>
          </Slider>
        ))}
      </div>
      <Slider
        asNavFor={nav1 ?? undefined}
        ref={sliderRef1}
        swipeToSlide
        focusOnSelect
        arrows={false}
        infinite={false}
        afterChange={handleAfterChange} // Callback to handle slide change
        initialSlide={activeIndex}
      >
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Slider>
    </div>
  );
}

export default ContentSlider;
