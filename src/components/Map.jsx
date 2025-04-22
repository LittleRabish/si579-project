import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker.jsx';

const Map = ({ latLng, handleMapClick }) => {
  return (
    <MapContainer center={[42.28, -83.73]} zoom={13} style={{ height: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker latLng={latLng} handleMapClick={handleMapClick} />
    </MapContainer>
  );
};

export default Map;
