import { Container, Col, Row } from "react-bootstrap"
import BarraDeProgresso from "./barraDeProgresso"
import { IconeRolagem } from "../icons"
import './styles.css'


export default function Skills() {
    return (
        <>
            <Container>
                <div id="skills" className="row">
                    <div id="divImagemSkills" className="col-lg-6 col-md-6 altura-div">
                        <img id="imagemSkills" src={'/imagens/Asset 4.png'} />
                    </div>

                    <div id="barraSkills" className="col-lg-6 col-md-6 altura-div">
                        <div className="item-alinhado row">
                            <h2>Skills</h2>
                            <div>
                                <BarraDeProgresso largura="85" titulo="Javascript" />
                                <BarraDeProgresso largura="90" titulo="HTML" />
                                <BarraDeProgresso largura="90" titulo="CSS" />
                                <BarraDeProgresso largura="75" titulo="ReactJS" />
                                <BarraDeProgresso largura="50" titulo="Databases" />
                            </div>
                        </div>
                    </div>
                    <Row >
                        <Col xs={2} className="rolagem">
                            <a href="#certificados">
                                <IconeRolagem size='13' color='#FFF' />
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}