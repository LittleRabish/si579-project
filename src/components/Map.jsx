import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './LocationMarker.jsx';

const Map = ({ latLng, setLatLng }) => {
    return (
        <MapContainer center={[42.28, -83.73]} zoom={13} style={{ height: '500px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker latLng={latLng} setLatLng={setLatLng} />
        </MapContainer>
    );
};

export default Map;
