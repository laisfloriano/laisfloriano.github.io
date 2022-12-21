import { Container, Col, Row } from "react-bootstrap"
import { IconeGithub, IconeLinkedin, IconeRolagem } from "../icons"
import './styles.css'

export default function Home() {
    return (
        <>
            <Container>
                <div id="home" className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 altura-div">
                        <img id="foto" src={'/imagens/IMG_0943_medium(perfil).png'} alt="Foto de perfil" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 altura-div">
                        <div className="item-alinhado">
                            <h1>Laís Gonçalves</h1>
                            <h3>Desenvolvedora Front-end</h3>
                            <button>
                                <a href="https://www.linkedin.com/in/laisfgoncalves/" target="_blank" rel="noopener noreferrer">
                                    <Row>
                                        <Col xs={4}>
                                            <IconeLinkedin size='16' color='#FFF' />
                                        </Col>
                                        <Col xs={8}>
                                            Linkedin
                                        </Col>
                                    </Row>

                                </a>
                            </button>
                            <button>
                                <a href="https://github.com/laisfloriano/" target="_blank" rel="noopener noreferrer">
                                   <Row>
                                        <Col xs={4}>
                                            <IconeGithub size='18' color='#FFF' />
                                        </Col>
                                        <Col xs={8}>
                                            Github
                                        </Col>
                                    </Row>
                                </a>
                            </button>
                        </div>
                    </div>
                    <Row >
                        <Col xs={2} className="rolagem">
                            <a href="#sobre">
                                <IconeRolagem size='13' color='#FFF' />
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}