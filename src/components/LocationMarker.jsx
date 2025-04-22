import { Popup, useMapEvents } from 'react-leaflet';
import { Marker } from 'react-leaflet/Marker';

const LocationMarker = ({ latLng, handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e.latlng),
  });

  return latLng ? (
    <Marker position={latLng}>
      <Popup>
        Lat: {latLng.wrap().lat.toFixed(4)} <br />
        Lng: {latLng.wrap().lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
