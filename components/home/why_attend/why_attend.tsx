import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from "./why_attend.module.scss";
import KidsZone from "./kids_zone/kids_zone";
import BeerGarden from "./beer_garden/beer_garden";
import Cuisine from "./cuisine/cuisine";
import KumariExhibition from "./kumari_exihibition/kumari_exhibition";
import KitesFestival from "./kites_festival/kites_festival";
import ArtsAndCrafts from "./arts_and_crafts/arts_and_crafts";
import DashainShopping from "./dashai_shopping/dashain_shopping";
import Navbar from "./swioer/navbar";
import Contentess from "./swioer/content";

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
  speed: 500,
  autoplaySpeed: 0,
  // centerMode: true,
  cssEase: "linear",
};

function WhyAttend() {
  const [isActive, setIsActive] = useState<number>(0);
  const sliderRef = useRef<Slider>(null); // Ref for the Slider component
  const listContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setIsActive(index);
    sliderRef.current?.slickGoTo(index); // Change the slide based on the clicked item
  };

  // const handleAfterChange = (index: number) => {
  //   setIsActive(index); // Update isActive when the slide changes
  // };

  const handleAfterChange = (index: number) => {
    setIsActive(index); // Update isActive when the slide changes

    // Scroll the list container to ensure the active item is in view
    const listContainer = listContainerRef.current;
    if (listContainer) {
      const itemWidth = listContainer.children[index].clientWidth;
      const offset = index * itemWidth;
      listContainer.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.why_attend}>
          <div className={styles.header}>Why Attend DT Fest 2024?</div>
          <div className={styles.list_container} ref={listContainerRef}>
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

// function WhyAttend() {
//   const navItems = [
//     {
//       title: "Kids Zone",
//       content: <KidsZone />,
//     },
//     {
//       title: "Beer Garden",
//       content: <BeerGarden />,
//     },
//     {
//       title: "Nepalese Cuuisine",
//       content: <Cuisine />,
//     },
//     {
//       title: "Kumari Exhibition",
//       content: <KumariExhibition />,
//     },
//     {
//       title: "Kites Festival",
//       content: <KitesFestival />,
//     },
//     {
//       title: "Arts and Crafts Section",
//       content: <ArtsAndCrafts />,
//     },
//   ];
//   const content = navItems.map((item) => <>{item.content}</>);
//   const conten = navItems.map((item) => item.title);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const navbarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const navbar = navbarRef.current;
//     if (navbar) {
//       const navItem = navbar.children[activeIndex] as HTMLElement;
//       if (navItem) {
//         navItem.scrollIntoView({ behavior: "smooth", inline: "center" });
//       }
//     }
//   }, [activeIndex]);

//   const handleNavClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const handleSwipe = (direction: string) => {
//     if (direction === "left" && activeIndex < navItems.length - 1) {
//       setActiveIndex(activeIndex + 1);
//     }
//     if (direction === "right" && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };
//   return (
//     <div>
//       <div className={styles.container}>
//         <div className={styles.why_attend}>
//           <div className={styles.header}>Why Attend DT Fest 2024?</div>

//           <Navbar
//             items={conten}
//             activeIndex={activeIndex}
//             onItemClick={handleNavClick}
//             ref={navbarRef}
//           />
//           <Contentess
//             contents={content}
//             activeIndex={activeIndex}
//             onSwipe={handleSwipe}
//             onIndexChange={setActiveIndex}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhyAttend;
