import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";



const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/JobIndex">Job List</Nav.Link>
        </Nav>
        <Form inline className="mr-auto">
          <Button.Link to ='/Formulir'>Log Out</Button.Link>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
