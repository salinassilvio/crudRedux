import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" component={Productos}></Route>
          <Route exact path="/productos/nuevo" 
          component={NuevoProducto}
          ></Route>
          <Route exact path="/productos/editar/:id" 
          component={EditarProducto}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
