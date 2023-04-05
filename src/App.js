
import './App.css';
import { Route,Routes } from 'react-router-dom';
//import {useState} from 'react'
import Login from './pages/login/Login'
import Registro from './pages/registro/Registro'
import PerfilUsuario from './pages/perfilusuario/PerfilUsuario'
import ListaProductos from './pages/listaProductos/ListaProductos'
import DetalleProducto from './pages/detalleproducto/DetalleProducto'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import NuevoProducto from './pages/admin/productos/NuevoProducto'
import EditarProducto from './pages/admin/productos/EditarProducto'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/perfilusuario" element={<PerfilUsuario />}/>
          <Route path="/listaProductos" element={<ListaProductos />}/>
          <Route path="/detalleproducto" element={<DetalleProducto />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/admin/nuevoproducto" element={<NuevoProducto />}/> 
          <Route path="/admin/editarproducto" element={<EditarProducto />}/>          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
