import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import weatherIcons from "../utils/weatherIcons";

const WeatherCard = ({ weather }) => {
  return (
    <>
      {weather ? (
        <Card bg="light">
          <Card.Header className="text-muted">{new Date(weather.current.time).toLocaleTimeString("en-US")}</Card.Header>
          <Card.Body>
            <Card.Title>
              <span className="fs-1" >{weatherIcons[weather.current.code] || 'Unknown'}</span>
              <br />
              {weather.current.temp}°C
            </Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            {weather.daily.map((info, index) => (
              <ListGroup.Item key={index}>
                {new Date(info.date).toDateString()}<br />
                {weatherIcons[info.code] || 'Unknown'}
                {info.minTemp}-{info.maxTemp}°C
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ) : (
        <p>Loading weather...</p>
      )}
    </>
  );
};

export default WeatherCard;
