import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './components/Map.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Header from './components/Header.jsx';


const App = () => {
  const [latLng, setLatLng] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isF, setIsF] = useState(false);


  const handleMapClick = (latlng) => {
    setLatLng(latlng);
    const { lat, lng } = latlng;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code&timezone=auto`)
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          current: {
            time: data.current.time,
            temp: data.current.temperature_2m,
            code: data.current.weather_code,
          },
          daily: data.daily.time.map((date, index) => ({
            date: date,
            maxTemp: data.daily.temperature_2m_max[index],
            minTemp: data.daily.temperature_2m_min[index],
            code: data.daily.weather_code[index],
          }))
        });
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        setWeather(null);
      });
  };


  return (
    <>
      <Header isF={isF} setIsF={setIsF} />
      <Container fluid>
        <Row>
          <Col lg={8} className='p-2'>
            <Map latLng={latLng} handleMapClick={handleMapClick} />
          </Col>
          <Col lg={4} className='p-2'>
            {latLng ? (
              <WeatherCard weather={weather} isF={isF} />
            ) : (
              <p>Select a location on the map to see the weather!</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
