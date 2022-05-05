import './App.css';

import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

//import Button from './components/Button';
//import Formulario from './components/Formulario/Formulario';

import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';



function App() {

  //                                Funtion y Const

  // Form 1
  /*const extraerForm = (contenido) =>{
    return console.log (contenido);
  }*/

  return (
    <div className="App">
      <NavBar/>
      {/*<ItemDetailContainer greeting="Producto Seleccionado"/>
      <ItemListContainer greeting="Catalogo de nuestros productos"/>
      {/*<Button txt='Click para Saber Más!'/>
      <Button />
      <Formulario handleForm={extraerForm}/>*/}

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
