import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from '../Login/Login';
import Home from '../Home/Home';
import Cadastrar from "../Cadastrar/Cadastrar";

function Rotas(){
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route index element={<Cadastrar/>}/>
                    <Route path="home" element={<Home/>}/>
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default Rotas