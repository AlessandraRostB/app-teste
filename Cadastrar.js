import "./Styles.css";
import assets from "../../assets/saude-mental-1.jpg";
import { useUserOperations } from "../../Hooks/useUserOperations";

function Cadastrar(){

    const {form, onChangeForm, hadleSubmit} = useUserOperations({nome:'', password:'', email:'', confirmar_senha:''}, 'user/login')

    return(
        <>
            <div className="container">
                <div className="container-cadastrar">
                    <div className="wrap-cadastrar">
                        <form className="cadastrar-form">
                            <span className="cadastrar-form-title">Bem-Vindo!</span>
                            <span className="cadastrar-form-title">
                                <img src={assets} alt="saude"/>
                            </span>
                            <div className="wrap-input">
                                <input type="nomecompleto" 
                                    placeholder="Nome"
                                    name="nome"
                                    value={form.name}
                                    onChange={onChangeForm}
                                />
                                <span className="focus-input" data-placeholder="Nome_Completo"></span>
                            </div>
                            <div className="wrap-input">
                                <input type="email" 
                                    placeholder="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={onChangeForm}
                                />
                                <span className="focus-input" data-placeholder="Email"></span>
                            </div>
                            <div className="wrap-input">
                                <input type="password" 
                                    placeholder="Password"
                                    name="password"
                                    value={form.password}
                                    onChange={onChangeForm}
                                />
                                <span className="focus-input" data-placeholder="Password"></span>
                            </div>
                            <div className="wrap-input">
                                <input type="confirmarsenha" 
                                    placeholder="Confirmar_Senha"
                                    name="confirmar_senha"
                                    value={form.confirmar_senha}
                                    onChange={onChangeForm}
                                />
                                <span className="focus-input" data-placeholder="Confirmar_Senha"></span>
                            </div>
                            <div className="container-cadastrar-form-btn">
                                <button className="cadastrar-form-btn" onClick={onChangeForm}>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastrar;