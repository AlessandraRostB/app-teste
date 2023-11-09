


function Terapia(){
    return(
        <>
            <h1>Terapia a Distância</h1>
            <select class="form-select" aria-label="Default select example">
                    <option selected>Exercícios</option>
                    <option value="1">Consversação</option>
                    <option value="2">Conexões para que quem estiver precisando de ajuda</option>
                    <option value="3">Praticar emoções</option>
            </select>
            <select class="form-select" aria-label="Default select example">
                    <option selected>Duração</option>
                    <option value="1">Meia hora</option>
                    <option value="2">Uma hora</option>
                    <option value="3">Uma hora e meia</option>
            </select>
            <select class="form-select" aria-label="Default select example">
                    <option selected>Quantas vezes por semana</option>
                    <option value="1">Uma vez por semana</option>
                    <option value="2">Duas vezes por semana</option>
                    <option value="3">Três vezes por semana</option>
            </select>
            <button type="submit" onClick={onCangePage}>Próximo</button>
        </>
    )
}

export default Terapia