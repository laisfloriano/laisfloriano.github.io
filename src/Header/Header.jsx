import { Navbar, Nav, Container, } from "react-bootstrap"
import './styles.css'

export default function Header() {
    return (
        <header>
            <Navbar fixed="top" variant='dark' expand="lg" className="navbar" >
                <Container>
                    <Navbar.Brand href="#home" fixed="top">
                        Laís  Gonçalves
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="me-auto">
                                <Nav.Link href="#sobre">
                                    Sobre
                                </Nav.Link>
                                <Nav.Link href="#skills">
                                    Skills
                                </Nav.Link>
                                <Nav.Link href="#certificados">
                                    Certificados
                                </Nav.Link>
                            </Nav>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
} 