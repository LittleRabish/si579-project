import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

/**
 * A React Leaflet function component that renders a map marker at a selected location 
 * and listens for user clicks on the map.
 *
 * @param {Object} props
 * @param {L.LatLng|null} props.latLng - The current selected location on the map
 * @param {function} props.handleMapClick - Callback triggered when the map is clicked
 * @return {JSX.Element|null} A `Marker` component with a popup at the selected location
 */
const LocationMarker = ({ latLng, handleMapClick }) => {
  // `useMapEvents` hook registers a click event handler on the map.
  useMapEvents({
    click: (e) => handleMapClick(e.latlng),
  });

  // This custom icon is used to address the broken marker icons when deploying.
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
        {/* Using `wrap()` to keep the longitude within valid bounds */}
        Lat: {latLng.wrap().lat.toFixed(4)} <br />
        Lng: {latLng.wrap().lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
