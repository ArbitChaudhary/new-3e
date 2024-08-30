import EventCard from "./event_card";
import styles from "./upcoming_events.module.scss";
import event1 from "../../../public/event-1.png";
import event2 from "../../../public/event-2.png";
import event3 from "../../../public/event-3.png";
import event4 from "../../../public/event-4.png";

function UpcomingEvents() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upcoming_events}>
          <div className={styles.top}>
            <div className={styles.header}>Upcoming Events</div>
            <button>See All Events</button>
          </div>
          <div className={styles.events}>
            <EventCard title="Event Name" image={event1} />
            <EventCard title="Event Name" image={event2} />
            <EventCard title="Event Name" image={event3} />
            <EventCard title="Event Name" image={event4} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className={styles.see_mobile}>See All Events</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;
