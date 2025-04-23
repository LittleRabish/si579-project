import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/weather_map_logo.png';

/**
 * A React function component that renders a header for the web page, including a logo 
 * and a toggle button to switch between Fahrenheit and Celsius.
 *
 * @param {Object} props
 * @param {boolean} props.isF - A boolean indicating whether to display temperature 
 *                              in Fahrenheit
 * @param {function} props.setIsF - A state setter function to toggle temperature units
 * @returns {JSX.Element} A Bootstrap `Navbar` component with a logo and a toggle button
 */
const Header = ({ isF, setIsF }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand>
          <img
            alt="weather map logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Weather Map
        </Navbar.Brand>
        <Button
          variant="outline-info"
          onClick={() => setIsF(!isF)}
        >
          {isF ? 'Switch to °C' : 'Switch to °F'}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
