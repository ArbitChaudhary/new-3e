import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import styles from "./map.module.scss";

function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_GOOGLE_AUTO_COMPLETE_KEY as string,
        version: "weekly",
      });
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 27.677924245039822,
        lng: 85.34918012632572,
      };
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 20,
        mapId: "map_id",
      };
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);
  return <div className={styles.map_container} ref={mapRef} />;
}

export default Map;
