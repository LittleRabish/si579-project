import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weatherIcons from "../utils/weatherIcons";

const WeatherCard = ({ weather, isF }) => {
  const convertTemp = (degC) => isF ? (degC * 9) / 5 + 32 : degC;

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric'
    });
  };


  return (
    <>
      {weather ? (
        <Card border="secondary" >
          <Card.Header className="text-muted text-start">
            {new Date(weather.current.time).toLocaleTimeString("en-US")}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <span className="fs-1" >{weatherIcons[weather.current.code] || 'Unknown'}</span>
              <br />
              {convertTemp(weather.current.temp).toFixed(1)}°{isF ? 'F' : 'C'}
            </Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            {weather.daily.map((info, index) => (
              <ListGroup.Item key={index} >
                <Row className="align-items-center text-center">
                  <Col xs={4}>
                    {formatDate(info.date)}
                  </Col>
                  <Col xs={4}>
                    {weatherIcons[info.code] || 'Unknown'}
                  </Col>
                  <Col xs={4}>
                    {convertTemp(info.minTemp).toFixed(1)}-
                    {convertTemp(info.maxTemp).toFixed(1)}°{isF ? 'F' : 'C'}
                  </Col>
                </Row>
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
