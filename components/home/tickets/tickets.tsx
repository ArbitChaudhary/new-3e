import TicketCard from "./ticket_card/ticket_card";
import styles from "./tickets.module.scss";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Tickets() {
  return (
    <>
      <div className={styles.container} id="ticket">
        {/* end solar system */}
        <div className={styles.solar_syst}>
          <div className={styles.sun}></div>
          <div className={styles.mercury}></div>
          <div className={styles.venus}></div>
          <div className={styles.earth}></div>
          <div className={styles.mars}></div>
          <div className={styles.jupiter}></div>
          <div className={styles.saturn}></div>
          <div className={styles.uranus}></div>
          <div className={styles.neptune}></div>
          <div className={styles.pluto}></div>
          <div className={styles.asteroids_belt}></div>
        </div>
        <div className={styles.ticket_box}>
          <div className={styles.box}>
            <div className={styles.header}>Ticket Information</div>
            <div className={styles.sub_head}>
              Secure your tickets now, before prices go up!
            </div>
            <div className={styles.countdown_text}>
              Count down timer to event ( October 5th 10 am )
            </div>
            <div className={styles.ticket_list}>
              <TicketCard />
              <TicketCard offer="10% off" />
              <TicketCard raffle="3 raffle entries" offer="VIP" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
