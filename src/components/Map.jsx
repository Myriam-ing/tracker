import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";

export default function Map({ fires }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fires.map((f, i) => (
        <LocationMarker key={i} fire={f} />
      ))}
    </MapContainer>
  );
}