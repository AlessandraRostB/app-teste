import Calendar from 'react-calendar'


function Header(){
    return(

        <>
            <h1>Consultas com Profissionais</h1>
            <img ></img>
            <select class="form-select" aria-label="Default select example">
                    <option selected>Nome do profissional</option>
                    <option value="1">Fernanda Oliveira</option>
                    <option value="2">José de Almeida</option>
                    <option value="3">Ana Cristina</option>
            </select>

            <Calendar onChange={onChange} value={value}/>

            <select class="form-select" aria-label="Default select example">
                    <option selected>Especialização</option>
                    <option value="1">Psiquiatra</option>
                    <option value="2">Psicóloga</option>
                    <option value="3">Terapeuta</option>
            </select>

            <button type="submit" onClick={onChangePage}>Próximo</button>
        </>
    )
}

export default Header