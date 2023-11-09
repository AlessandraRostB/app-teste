import './App.css';
import background from "./assets/images2.jpg";


function App(props) {


   
  return (
    <>
    
        <div className='App' style={{backgroundImage: `url(${background})`}}>
          <h1>Saúde Mental em dia</h1>

          <button type='submit' onClick={"onChangePage"}>Login</button>
          <button type='submit' onClick={"onChangePage"}>Cadastrar</button>
        </div>
      
        
      
    </>
    
  );
}

export default App;
