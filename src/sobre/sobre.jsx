import { Container, Row, Col } from "react-bootstrap"
import { IconeDownload, IconeEmail, IconeRolagem } from "../icons"
import './styles.css'

export default function Sobre() {
    return (
        <>
            <Container>
                <div className="row">
                    <div id="sobre" className="col-lg-6 col-md-6 altura-div">
                        <div className="item-alinhado-sobre">
                            <h2>
                                Sobre Mim
                            </h2>
                            <p>
                                Olá,
                                Eu tenho 28 anos, vivo nômade pelo Brasil, sou graduada em música e atualmente estou em transição de carreira buscando novas oportunidades como desenvolvedora front-end, no início de 2021 iniciei meus estudos por conta própria por meio de cursos e participei de alguns projetos junto ao meu esposo, que é desenvolvedor full-stack, onde adquiri experiência e novos conhecimentos. Depois de me apaixonar pela àrea de TI decidi ingressar na graduação em engenharia de software afim de construir uma carreira sólida, estou em contante processo de aprendizagem e buscando me aperfeiçoar com dedicação e entusiasmo.
                            </p>
                            <button>
                                <a href="/CV Lais Floriano Gonçalves.pdf" target="_blank" rel="noopener noreferrer">
                                    <Row>
                                        <Col xs={3}>
                                            <IconeDownload size='14' color='#FFF' />
                                        </Col>
                                        <Col xs={9}>
                                            Currículo
                                        </Col>
                                    </Row>
                                </a>
                            </button>
                            <button>
                                <a href="mailto:laisfloriano.g@gmail.com">
                                    <Row>
                                        <Col xs={4}>
                                            <IconeEmail size='18' color='#FFF' />
                                        </Col>
                                        <Col xs={8}>
                                            E-mail
                                        </Col>
                                    </Row>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div id="imagemSobre" className="col-lg-6 col-md-6 altura-div">
                        <img src={'/imagens/Asset 2.png'} />
                    </div>
                    <Row >
                        <Col xs={2} className="rolagem">
                            <a href="#skills">
                                <IconeRolagem size='13' color='#FFF' />
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )

}