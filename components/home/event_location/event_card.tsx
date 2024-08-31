import Image from "next/image";
import styles from "./event_card.module.scss";

interface IEventCard {
  image?: any;
  title?: string;
}

function EventCard({ image, title }: IEventCard) {
  return (
    <>
      <div className={styles.card_container}>
        <Image
          src={image}
          alt="Event Image"
          height={390}
          // width={279}
          //  layout="responsive"
          style={{ position: "relative", objectFit: "cover" }}
        />
        <div className={styles.event_name_box}>
          <div className={styles.event_name}>{title}</div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
