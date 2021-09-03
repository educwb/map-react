import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from 'react-leaflet'

function App() {

  return (
    <div className="App">
      <MapContainer center={[0, 0]} zoom={4}>
      {/* <TileLayer
        attribution="&amp;copy <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
      /> */}
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" 
        />
      </MapContainer>
    </div>
  );
}

export default App;
