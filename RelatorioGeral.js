


function RelatorioGeral(){

    return(
        <>
            <h1>Relatório Geral</h1>
            <div>
                <select class="form-select" aria-label="Default select example">
                        <option value="1">Escreva o diagnóstico do paciente</option>
                </select>
            </div>

            <button type="submit" onClick={onCangePage}>Consulta finalizada</button>
        </>
    )
}

export default RelatorioGeral