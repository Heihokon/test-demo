import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { routesList } from '../constants/routesList';
import LinkWithQuery from './LinkWithQuery'

function Menu() {
    return (
        <Navbar bg="light" expand={false}>
            <Container>
                <Navbar.Brand href="#home">Demo-app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {routesList.map((item, index) => (<LinkWithQuery key={index} to={item.path}>{item.name}</LinkWithQuery>))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;