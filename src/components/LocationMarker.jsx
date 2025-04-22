import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const LocationMarker = ({ latLng, handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e.latlng),
  });

  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return latLng ? (
    <Marker position={latLng} icon={customIcon} >
      <Popup>
        Lat: {latLng.wrap().lat.toFixed(4)} <br />
        Lng: {latLng.wrap().lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
