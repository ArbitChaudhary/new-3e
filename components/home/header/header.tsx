import styles from "./header.module.scss";
import Logo from "../../../public/3E-Logo.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";

interface IHeaderMenu {
  title: string;
  path: string;
}

const headerMenu: IHeaderMenu[] = [
  {
    title: "Festival Highlights",
    path: "#festivals",
  },
  {
    title: "Tickents",
    path: "#ticket",
  },
  {
    title: "Vendors & Sponsors",
    path: "#vendor",
  },
  {
    title: "Venue Direction",
    path: "#event_location",
  },
];

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <div className={styles.header_items}>
          <div className={styles.nav_logo}>
            <Image
              src={Logo}
              alt=""
              width={93}
              height={83}
              // fill
              // layout="responsive"
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.header_menu}>
            {headerMenu?.map((item) => (
              <div className={styles.menu} key={item.title}>
                <a href={item.path}>{item.title}</a>
              </div>
            ))}
          </div>
          <button type="button" className={styles.ticket_button}>
            <a
              href="https://www.ticketfam.com/dt-fest-2024-659624038"
              target="_blank"
            >
              Book Your Ticket
            </a>
          </button>
        </div>
        <div className={styles.menu_icon}>
          <TbMenuDeep onClick={() => setOpenMenu(true)} />
        </div>
        <div className={openMenu ? styles.show_menu : styles.hide_menu}>
          <MobileMenu setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </div>
  );
}

export default Header;

interface IMobileMenu {
  setOpenMenu: any;
}

function MobileMenu({ setOpenMenu }: IMobileMenu) {
  return (
    <>
      <div className={styles.mobile_nav}>
        <div className={styles.top}>
          <IoMdClose onClick={() => setOpenMenu(false)} />
        </div>
        <div className={styles.nav_items}>
          <a href="#festivals">
            <div className={styles.nav_item_flex}>
              <div className={styles.menu_item}>Festival Highlights</div>
              <IoIosArrowForward />
            </div>
          </a>
          <a href="#ticket">
            <div className={styles.nav_item_flex}>
              <div className={styles.menu_item}>Tickets</div>
              <IoIosArrowForward />
            </div>
          </a>
          <a href="#vendor">
            <div className={styles.nav_item_flex}>
              <div className={styles.menu_item}>Vendors & Sponsors</div>
              <IoIosArrowForward />
            </div>
          </a>
          <a href="#event_location">
            <div className={styles.nav_item_flex}>
              <div className={styles.menu_item}>Venue Direction</div>
              <IoIosArrowForward />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
