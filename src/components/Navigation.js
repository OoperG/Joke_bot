import {Container, Nav, Navbar} from "react-bootstrap";
import { AuthContext } from '../components/AuthContext';
import { useContext } from 'react';

function Navigation() {

    const { isLoggedIn, setIsLoggedIn, username, setUsername } = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">IA Tools</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/joke">Joke</Nav.Link>
                    <Nav.Link href="/mail">Mail</Nav.Link>
                    <Nav.Link href="/reformulation">Reformulation</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{username}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;