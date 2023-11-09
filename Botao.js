import { BotaoEstilo } from "./styles"


function Botao(props){
    return(
        <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>
    )
}

export default Botao 