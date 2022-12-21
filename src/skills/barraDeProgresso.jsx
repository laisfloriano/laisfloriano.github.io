
export default function BarraDeProgresso(props) {
    const style = {

        divPai: {
            backgroundColor: "#333333",
            height: "12px",
            margin: "10px 0 25px 0",
            padding: '0',
            borderRadius: "5px",

        },
        divFilha: {
            backgroundColor: "#62D7F8",
            width: `${props.largura}%`,
            height: "12px",
            borderRadius: "5px",
        }
    }
    return (
        <div className="row" style={{ width: '100%' }}>
            <div className="col-lg-4 col-md-4 alinhamento-titulo-skills" >
                <h4>{props.titulo} </h4>
            </div>
            <div className="col-lg-7 col-md-7" style={style.divPai}>
                <div style={style.divFilha}>
                </div>
            </div>
        </div>
    )
}