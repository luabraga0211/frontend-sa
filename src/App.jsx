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
      <Route path='/login' element={<Login />} />
      <Route path='/iniciologado' element={<Iniciologado />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App