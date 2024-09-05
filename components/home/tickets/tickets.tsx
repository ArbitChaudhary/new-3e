import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import NewTicketCard from "./ticket_card/new_card";
import TicketCard from "./ticket_card/ticket_card";
import styles from "./tickets.module.scss";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PlayList from "../play_list/play_list";

function Tickets() {
  return (
    <>
      <div className={styles.container} id="ticket">
        {/* end solar system */}
        <ParallaxProvider>
          <Parallax
            speed={-20}
            // y={[-20, 20]} // Adjust these values to control the parallax effect
            // tagOuter="div"
          >
            <div className={styles.solar_syst}>
              <div className={styles.sun}></div>
              <div className={styles.mercury}></div>
              <div className={styles.venus}></div>
              <div className={styles.earth}></div>
              <div className={styles.mars}></div>
              <div className={styles.asteroids_belt}></div>
              <div className={styles.jupiter}></div>
              <div className={styles.saturn}></div>
              <div className={styles.uranus}></div>
              <div className={styles.neptune}></div>
              <div className={styles.pluto}></div>
            </div>
          </Parallax>
          <Parallax
            speed={20}
            // y={[20, -20]} // Adjust these values to control the parallax effect
            // tagOuter="div"
          >
            <div className={styles.ticket_box}>
              <PlayList />
              <div className={styles.box}>
                <div className={styles.header}>Ticket Information</div>
                <div className={styles.ticket_list}>
                  {/* <TicketCard /> */}
                  {/* <TicketCard offer="10% off" /> */}
                  {/* <TicketCard raffle="3 raffle entries" offer="VIP" /> */}
                  <NewTicketCard
                    title="VIP PASS"
                    price={50}
                    desc="VIP Access for one person, includes all VIP Access and Perks "
                  />
                  <NewTicketCard
                    title="General Admission"
                    count="5"
                    price={60}
                  />
                </div>
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default Tickets;
