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
    path: "",
  },
  {
    title: "Tickents",
    path: "",
  },
  {
    title: "Vendors & Sponsors",
    path: "",
  },
  {
    title: "Venue Direction",
    path: "",
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
              width={70}
              height={60}
              // fill
              // layout="responsive"
              style={{ objectFit: "contain", position: "relative" }}
            />
          </div>
          <div className={styles.header_menu}>
            {headerMenu?.map((item) => (
              <div className={styles.menu} key={item.title}>
                {item.title}
              </div>
            ))}
          </div>
          <button type="button" className={styles.ticket_button}>
            Book Your Ticket
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
          <div className={styles.nav_item_flex}>
            <div className={styles.menu_item}>Festival Highlights</div>
            <IoIosArrowForward />
          </div>
          <div className={styles.nav_item_flex}>
            <div className={styles.menu_item}>Tickets</div>
            <IoIosArrowForward />
          </div>
          <div className={styles.nav_item_flex}>
            <div className={styles.menu_item}>Vendors & Sponsors</div>
            <IoIosArrowForward />
          </div>
          <div className={styles.nav_item_flex}>
            <div className={styles.menu_item}>Venue Direction</div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}
