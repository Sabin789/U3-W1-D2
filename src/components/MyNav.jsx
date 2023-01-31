

import {Container,Nav,Navbar} from 'react-bootstrap';



function MyNav() {
  return (


    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Epi-Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNav;