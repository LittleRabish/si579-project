import { Marker, Popup, useMapEvents } from 'react-leaflet';

const LocationMarker = ({ latLng, handleMapClick }) => {
    useMapEvents({
        click: (e) => handleMapClick(e.latlng),
    });

    return latLng ? (
        <Marker position={latLng}>
            <Popup>
                You clicked here: <br />
                Lat: {latLng.lat.toFixed(4)} <br />
                Lng: {latLng.lng.toFixed(4)}
            </Popup>
        </Marker>
    ) : null;
};

export default LocationMarker;
