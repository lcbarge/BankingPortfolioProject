import {Container, Nav, Navbar} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" >
      <Container>
        <LinkContainer to="/home">
        <Navbar.Brand><Image src="/piggy.png" roundedCircle={true} style={{ width: '3rem' }} alt="Responsive image"/>LB Bank</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/createAccount">
              <Nav.Link>Create Account</Nav.Link>
          </LinkContainer>
            <LinkContainer to="/deposit">
              <Nav.Link>Deposit</Nav.Link>
          </LinkContainer>
            <LinkContainer to="/withdraw">
              <Nav.Link>Withdraw</Nav.Link>
          </LinkContainer>
            <LinkContainer to="/allData">
              <Nav.Link>All Data</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar