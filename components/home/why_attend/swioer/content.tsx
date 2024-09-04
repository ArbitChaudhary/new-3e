import React, { ReactElement } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./content.module.scss";

interface ContentProps {
  contents: ReactElement[];
  activeIndex: number;
  onSwipe: (direction: string) => void;
}

const Contentess: React.FC<ContentProps> = ({
  contents,
  activeIndex,
  onSwipe,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe("left"),
    onSwipedRight: () => onSwipe("right"),
    //  preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={styles.content} {...handlers}>
      <div
        className={styles.content_wrapper}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {contents.map((content, index) => (
          <div key={index} className={styles.content_item}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contentess;
