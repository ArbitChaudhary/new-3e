import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./leaflet.module.scss";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const position: LatLngExpression = [38.72468161907585, -77.47421343794558];
function LeafletMap() {
  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>DT FEST 2024</Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
