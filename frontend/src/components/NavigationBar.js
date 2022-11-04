import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Quickpoll</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/#majority">Majority</Nav.Link>
          <Nav.Link href="/#proportional">Proportional</Nav.Link>
          <Nav.Link href="/#prefrential">Preferential</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
