import TicketCard from "./ticket_card/ticket_card";
import styles from "./tickets.module.scss";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Tickets() {
  return (
    <div className={styles.ticket_box_container}>
      <div className={styles.container} id="ticket">
        {/* solar system */}
        {/* <div className={styles.description}>
          <h1 >Solar System</h1>
          <hr />
          <p>
            I know this is not the first one on CodePen, but I'm a space and
            physics lover, and I wanted to create mine :)
          </p>
          <p>
            Here is a true time scaled solar-system, which means that every
            object has a time relative to an Earth year. You can change the
            number in second of the
            <br />
            <code>$year-in-second</code>
            variable to increase the speed of revolutions. Here 1 year = 30
            seconds.
          </p>
          <p className={styles.hide}>
            Note the CSS tricks for the Saturn rings (box-shadow) and reverse
            animation to compensate for the orbit.
          </p>
          <hr />
          <p className={styles.author}>
            Made with
            <i className="fa fa-heart"></i>
            by Malik Dellidj
          </p>
          <p className="links">
            <a
              className="fa fa-codepen icon"
              href="https://codepen.io/kowlor/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="fa fa-github-alt icon"
              // href="https://github.com/KOWLOR"
              // target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="fa fa-twitter icon"
              href="https://twitter.com/Dathink"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </p>
        </div> */}

        {/* end solar system */}
        <div className={styles.ticket_box}>
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
    </div>
  );
}

export default Tickets;
