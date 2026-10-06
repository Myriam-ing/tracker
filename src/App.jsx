import { useEffect, useState } from "react";
import Map from "./components/Map";

const MAP_KEY = import.meta.env.VITE_FIRMS_KEY;
const URL = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${MAP_KEY}/VIIRS_SNPP_NRT/world/1`;

function parseCSV(text) {
  const [header, ...rows] = text.trim().split("\n");
  const cols = header.split(",");
  return rows.map((r) => {
    const v = r.split(",");
    return Object.fromEntries(cols.map((c, i) => [c, v[i]]));
  });
}

export default function App() {
  const [fires, setFires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.text())
      .then((t) => setFires(parseCSV(t).slice(0, 2000)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="header">
        🔥 Wildfire Tracker {loading ? "(chargement...)" : `- ${fires.length} feux`}
      </div>
      <Map fires={fires} />
    </>
  );
}