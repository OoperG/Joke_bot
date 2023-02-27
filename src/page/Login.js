import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../components/AuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../css/login.css"

function Login() {
    const {isLoggedIn, setIsLoggedIn, username, setUsername} = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(newUsername);
        setIsLoggedIn(true);
        setNewUsername('');
        navigate('/joke');
    };
    return (
        <div className="containers d-flex justify-content-center">
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <div className="container d-flex justify-content-center">
                        <Card.Title>User Login</Card.Title>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pseudo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter pseudo"
                                onChange={(e) => setNewUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;
