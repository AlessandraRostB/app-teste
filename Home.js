import Card from "../../componentes/Card/Card";



function Home(props){

    

    return(
        <>
            <section className="painel-de-imagens">
                <h1>Opções de escolha:</h1>

                { <Card reproduz={props.handlePageChange} imagem={"https://image/jpeg;base64,/9j/4"} titulo={"Consultas com profissionias"}/> }
                { <Card reproduz={props.handlePageChange} imagem={"https://data:image/jpeg;base64,/9j"} titulo={"Terapia a Distância"}/> }
                { <Card reproduz={props.handlePageChange} imagem={"https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi33pYNG4T9PIop85tgtGZD4VkthfK3_4itg&usqp=CAU"} titulo={"Relatorio Geral"}/> }
            </section>
        
        </>
    
    )
}

export default Home