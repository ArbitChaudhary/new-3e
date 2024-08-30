import Footer from "../footer/footer";
import ArtistsLineup from "./artists-lineup/artists_lineup";
import Celebration from "./celebration/celebration";
import EventLocation from "./event_location/event_location";
import Hero from "./hero/hero";
import styles from "./home.module.scss";
import PlayList from "./play_list/play_list";
import Sponsors from "./sponsors/sponsors";
import Tickets from "./tickets/tickets";
import Vendors from "./vendors/vendors";
import WhyAttend from "./why_attend/why_attend";

const HomePage = () => {
  return (
    <main>
      <div className={styles.home}>
        {/* <Header /> */}
        <Hero />
        <Celebration />
        <WhyAttend />
        <ArtistsLineup />
        <PlayList />
        <Tickets />
        <Vendors />
        <Sponsors />
        <EventLocation />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
