import { useState, useEffect } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './components/Map.jsx';
import weatherIcons from "./utils/weatherIcons";

function App() {
  const [latLng, setLatLng] = useState(null);

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!latLng) return;

    const fetchWeather = async () => {
      const { lat, lng } = latLng;
      
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code`)
        .then((response) => response.json())
        .then((data) => {
          setWeather({
            temperature: data.current.temperature_2m,
            code: data.current.weather_code,
          });
        });
    };

    fetchWeather();
  }, [latLng]);

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
                {weather ? (
                  <div>
                    <h1>
                      {weatherIcons[weather.code] || '❓'} {weather.temperature}°C
                    </h1>
                  </div>
                ) : (
                  <p>Loading weather...</p>
                )}
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
