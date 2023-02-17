import {Container, Nav, Navbar} from "react-bootstrap";

function Navigation() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">IA Tools</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/joke">Joke</Nav.Link>
                    <Nav.Link href="/mail">Mail</Nav.Link>
                    <Nav.Link href="/reformulation">Reformulation</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;