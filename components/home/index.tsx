import Footer from "../footer/footer";
import ArtistsLineup from "./artists-lineup/artists_lineup";
import Celebration from "./celebration/celebration";
import EventLocation from "./event_location/event_location";
import Hero from "./hero/hero";
import styles from "./home.module.scss";
import PlayList from "./play_list/play_list";
import Sliders from "./slider/slider";
import Sponsors from "./sponsors/sponsors";
import Tickets from "./tickets/tickets";
import Vendors from "./vendors/vendors";
import ScrollableComponent from "./why_attend/why_attend";
import WhyAttend from "./why_attend/why_attend";

const HomePage = () => {
  return (
    <>
      {/* <div> */}
      {/* <Header /> */}
      <Hero />
      <Celebration />
      {/* <WhyAttend /> */}
      
      <ScrollableComponent />
      <ArtistsLineup />
      <PlayList />
      <Sliders />
      <Tickets />
      <Vendors />
      <Sponsors />
      <EventLocation />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default HomePage;
