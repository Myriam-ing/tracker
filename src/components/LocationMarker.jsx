import { CircleMarker, Popup } from "react-leaflet";

export default function LocationMarker({ fire }) {
  return (
    <CircleMarker
      center={[+fire.latitude, +fire.longitude]}
      radius={4}
      pathOptions={{ color: "red", fillOpacity: 0.7 }}
    >
      <Popup>
        <strong>Feu détecté</strong>
        <br />
        Date : {fire.acq_date}
        <br />
        Heure : {fire.acq_time}
        <br />
        Confiance : {fire.confidence}
      </Popup>
    </CircleMarker>
  );
}