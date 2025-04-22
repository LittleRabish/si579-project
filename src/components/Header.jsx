import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/weather_map_logo.png';

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
