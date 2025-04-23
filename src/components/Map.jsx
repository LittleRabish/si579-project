import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker.jsx';

/**
 * A React Leaflet function component that renders an interactive Leaflet map.
 * 
 * The user clicks are handled in the `LocationMarker` component, so all the 
 * parameters are passed to it.
 *
 * @param {Object} props
 * @param {L.LatLng|null} props.latLng - The current selected location on the map
 * @param {function} props.handleMapClick - Callback triggered when the map is clicked
 * @return {JSX.Element} A Leaflet map with a tile layer and a location marker
 */
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
