import styles from "./new_card.module.scss";

interface ITicketCardProps {
  title?: string;
  count?: string;
  price: number;
  offer?: string;
  desc?: string;
}

function NewTicketCard({ price, count, offer, title, desc }: ITicketCardProps) {
  return (
    <div className={styles.new_card_container}>
      <div className={styles.card_header}>
        <div className={styles.header_content}>
          <div className={styles.ticket_title}>{title} </div>
          {count && <div className={styles.ticket_title}>For {count}</div>}
        </div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
        <div className={styles.circle5}></div>
        <div className={styles.circle6}></div>
        <div className={styles.circle7}></div>
        <div className={styles.circle8}></div>
        <div className={styles.circle9}></div>
        <div className={styles.circle10}></div>
        <div className={styles.circle11}></div>
        <div className={styles.circle12}></div>
        <div className={styles.circle13}></div>
        <div className={styles.circle14}></div>
      </div>
      <div className={styles.card_body}>
        {desc && <div className={styles.description}>{desc}</div>}
        <div className={styles.ticket_price}>Price: ${price}</div>
      </div>
      <div className={styles.button_container}>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default NewTicketCard;
