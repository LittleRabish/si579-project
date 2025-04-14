import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './components/Map.jsx';

function App() {
  const [latLng, setLatLng] = useState(null);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Map latLng={latLng} setLatLng={setLatLng} />
          </Col>
          <Col lg={4}>
            {latLng ? (
              <div>
                <p>Latitude: {latLng.lat.toFixed(4)}</p>
                <p>Longitude: {latLng.lng.toFixed(4)}</p>
              </div>
            ) : (
              <p>Click on the map to get location coordinates.</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
