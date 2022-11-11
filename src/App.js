// importa la libreria React
import React from 'react';
// importa los estilos de la página
import './App.css';
// importa los módulos (.js) para llamar a los componentes
import Menu from './Menu';
import Header from './Header';
import Pie from './Pie';
import Seccion from './Seccion'

function App() {
  return (
    <div className="container">
      <Menu/>
      <Header/> 
      <Seccion/>
      <Pie/> 
    </div>
  );
}

export default App;
