import './App.css'
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Iniciologado from './pages/Iniciologado/Iniciologado';
import Cadastro from './pages/Cadastro/Cadastro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Iniciologado' element={<Iniciologado />} />
      <Route path='/Cadastro' element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App