import assets from '../../assets/saude-mental-1.jpg';
import "./Styles.css";
import { useUserOperations } from "../../Hooks/useUserOperations";

function Login(){
    const {form, onChangeForm, hadleSubmit} = useUserOperations({password:'', email:'' }, 'user/login') 

    return(
        <>
        <h1>Bem-Vindo</h1>
          <img src={assets} alt="saude"/>
            <form onSubmit={hadleSubmit}>
                <label>E-mail:</label>
                <input type="text" 
                placeholder="Nome"
                name="nome"
                value={form.name}
                onChange={onChangeForm}
                />

                <label>Senha:</label>
                <input type="password" 
                placeholder="Senha"
                name="password"
                value={form.password}
                onChange={onChangeForm}
                />
                <p>Ainda não tem conta? Criar conta</p>

                <button type='submit' onClick={onChangeForm}>Entrar</button>
            </form>
        </>
    )
}

export default Login;