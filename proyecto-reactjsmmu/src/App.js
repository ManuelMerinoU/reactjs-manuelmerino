import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Button from './components/Button';
import Formulario from './components/Formulario/Formulario';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  //                                Funtion y Const

  // Form 1
  const extraerForm = (contenido) =>{
    return console.log (contenido);
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Catalogo de nuestros productos"/>
      <Button txt='Click para Saber Más!'/>
      <Button />
      <Formulario handleForm={extraerForm}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
