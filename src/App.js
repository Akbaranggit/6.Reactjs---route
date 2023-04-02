import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'> Home </Nav.Link>
            <Nav.Link as={Link} to='/about'> About </Nav.Link>
            <Nav.Link as={Link} to='/login' > Login </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h3>Selamat datang di home, mari belajar route</h3>
      <Outlet />
    </>
  );
}

export default App;
