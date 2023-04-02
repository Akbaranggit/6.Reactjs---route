import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function About(){
    return(
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
            <h3>Ini halaman About</h3>
        </>
    )
}
export default About;