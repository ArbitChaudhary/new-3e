import TicketCard from "./ticket_card/ticket_card";
import styles from "./tickets.module.scss";

function Tickets() {
  return (
    <>
      <div className={styles.container}>
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
    </>
  );
}

export default Tickets;
