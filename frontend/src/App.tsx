import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column h-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>BLISS-BAZAR</Navbar.Brand>
            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/cart" className="nav-link">
                Sign in
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
