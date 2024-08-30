import Image from "next/image";
import styles from "./ticket_card.module.scss";
import ticketBg from "../../../../public/ticket-card.png";

interface ITicketCard {
  raffle?: string;
  offer?: string;
}

function TicketCard({ raffle, offer }: ITicketCard) {
  return (
    <>
      <div className={styles.ticket_card}>
        {/* <div className={styles.ticket_bg}> */}
        <Image src={ticketBg} alt="Ticket Card" fill />
        {/* </div> */}
        <div className={styles.box_flex}>
          <div className={styles.top_flex}>
            <div className={styles.raffle}>{raffle}</div>
            <div className={styles.offer}>{offer}</div>
          </div>
          <div className={styles.ticket_title}>General Admission</div>
          <div className={styles.people_count}>For 1</div>
          <div className={styles.ticket_text}>
            {" "}
            This ticket grants access to the event but does not include VIP
            access.
          </div>
          <div className={styles.ticket_price}>
            <div>Price</div>
            <div>$15</div>
          </div>
          <button className={styles.buy_btn}>Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default TicketCard;
