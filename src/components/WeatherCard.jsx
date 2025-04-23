import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weatherIcons from "../utils/weatherIcons";

/**
 * A React function component that displays the current weather and a 7-day forecast
 * using a Bootstrap `Card` and `ListGroup` layout.
 *
 * @param {Object} props
 * @param {Object} props.weather - The weather data object containing current and 
 *                                 daily forecasts
 * @param {boolean} props.isF - A boolean indicating whether to display temperature 
 *                              in Fahrenheit.
 * @returns {JSX.Element} A Bootstrap `Card` displaying current and forecasted weather
 */
const WeatherCard = ({ weather, isF }) => {

  /**
   * Converts temperature from Celsius to Fahrenheit if `isF` flag is true. 
   * 
   * @param {number} degC - The temperature in Celsius
   * @param {boolean} isF - A boolean indicating whether to convert to Fahrenheit
   * @returns {number} The temperature in Fahrenheit or Celsius based on `isF` flag
   */
  const convertTemp = (degC, isF) => isF ? (degC * 9) / 5 + 32 : degC;

  /**
  * Formats a date string to a more readable format and a correct timezone.
  *
  * @param {string} date - A date string in 'YYYY-MM-DD' format
  * @returns {string} - Formatted date like 'Mon, Apr 21'
  */
  const formatDate = (date) => {
    // Directly using `Date` constructor puts the date in UTC timezone.
    // This is a workaround to get the correct timezone.
    const [year, month, day] = date.split('-');
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric'
    });
  };

  // `weather` format:
  // {
  //   current: {
  //     time: "2025-04-21T14:00",
  //     temp: 21.3,
  //     code: 3
  //   },
  //   daily: [
  //     {
  //       date: "2025-04-21",
  //       maxTemp: 22.1,
  //       minTemp: 14.2,
  //       code: 2
  //     },
  //     ...
  //   ]
  // }
  return (
    <>
      {weather ? (
        <Card border="secondary" >
          <Card.Header className="text-muted text-start">
            {new Date(weather.current.time).toLocaleTimeString("en-US")}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <span className="fs-1" >
                {weatherIcons[weather.current.code] || 'Unknown'}
              </span><br />
              {convertTemp(weather.current.temp, isF).toFixed(1)}°{isF ? 'F' : 'C'}
            </Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            {weather.daily.map((info, index) => (
              <ListGroup.Item key={index} >
                <Row className="align-items-center text-center">
                  <Col xs={4}>
                    {formatDate(info.date)}
                  </Col>
                  <Col xs={4} className="fs-4">
                    {weatherIcons[info.code] || 'Unknown'}
                  </Col>
                  <Col xs={4}>
                    {convertTemp(info.minTemp, isF).toFixed(1)}-
                    {convertTemp(info.maxTemp, isF).toFixed(1)}°{isF ? 'F' : 'C'}
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
