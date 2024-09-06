import React, { useEffect, useRef, useState } from "react";
import styles from "./swiper.module.scss";
import Slider from "react-slick";

interface SliderProps {
  title: string[];
  content: React.ReactElement[];
}

function ContentSlider({ title, content }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef1 = useRef<Slider>(null);
  const titleListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef1.current) {
      sliderRef1.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (titleListRef.current) {
      const titleList = titleListRef.current;
      const titleElement = titleList.children[activeIndex] as HTMLDivElement;

      if (titleElement) {
        const titleListWidth = titleList.offsetWidth;
        const titleElementWidth = titleElement.offsetWidth;
        const titleElementOffsetLeft = titleElement.offsetLeft;

        const scrollLeft =
          titleElementOffsetLeft + titleElementWidth / 2 - titleListWidth / 2;

        titleList.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleAfterChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.slider_container}>
      {/* Title Navigation */}
      <div className={styles.list_container} ref={titleListRef}>
        {title.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              activeIndex === index ? styles.selected_title : styles.title
            }
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content Slider */}
      <Slider
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
