import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Quickpoll</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#majority" onClick={handleClick}>
            Majority
          </Nav.Link>
          <Nav.Link href="#proportional" onClick={handleClick}>
            Proportional
          </Nav.Link>
          <Nav.Link href="#preferential">Preferential</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function handleClick() {
  alert('hi you clicked');
}
