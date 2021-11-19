import React from 'react';
import 
{ 
    NavDropdown,
    Container,
    Offcanvas,
    Nav,
    Form,
    Button,
    FormControl,
} from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar'

const Nvbr = () => {
    return(
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                        <NavDropdown title="More" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="#">Our Partners</NavDropdown.Item>
                            <NavDropdown.Item href="#">Our Websites</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                            Volunteer Registration Form
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button color="primary">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nvbr;