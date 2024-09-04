import React, { forwardRef } from "react";
import styles from "./navbar.module.scss";

interface NavbarProps {
  items: string[];
  activeIndex: number;
  onItemClick: (index: number) => void;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ items, activeIndex, onItemClick }, ref) => {
    return (
      <div ref={ref}>
        <div className={styles.list_container}>
          {/* <div  > */}
          {items.map((item, index) => (
            <div
              key={index}
              className={
                activeIndex === index ? styles.selected_title : styles.title
              }
              onClick={() => onItemClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={styles.underline}
          style={{
            transform: `translateX(${activeIndex * (100 / items.length)}%)`,
          }}
        >
          {/* </div> */}
        </div>
      </div>
    );
  }
);

export default Navbar;
