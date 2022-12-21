import { Container, row } from "react-bootstrap"
import './styles.css'

export default function Certificados() {
    return (
        <>
            <Container>
                <div id="certificados" className="row">
                    <h2 className="tituloCertificados">Certificados</h2>
                    <div className="col-lg-6 col-mg-6 altura-div-certificados">
                        <a href="https://www.coursera.org/account/accomplishments/verify/NLNVLZ4KGT9J" target="_blank" rel="noopener noreferrer">
                            <img id="imagemCertificados" src={'/imagens/CERTIFICATE_Lais.jpeg'} alt="Imagem do certificado" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-mg-6 altura-div-certificados">
                        <a href="https://www.udemy.com/certificate/UC-372579c3-9744-453f-8919-03086d9151bd/" target="_blank" rel="noopener noreferrer">
                            <img id="imagemCertificados" src={'/imagens/UC-372579c3-9744-453f-8919-03086d9151bd.jpg'} alt="Imagem do certificado" />
                         </a>
                    </div>
                </div>
            </Container>
        </>
    )
}