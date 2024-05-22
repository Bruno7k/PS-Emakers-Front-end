import "./App.css"

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from "./pages/Login/Login"
import Recuperar from "./pages/Recuperar/Recuperar"
import Registrar from "./pages/Registrar/Registrar"
import Inicial from "./pages/Inicial/Inicial"
import Promocao from "./pages/Promocao/Promocao"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/recuperar' element={<Recuperar/>}/>
        <Route path='/registrar' element={<Registrar/>}/> 
        <Route path='/inicial' element={<Inicial/>}/>
        <Route path='/promocao' element={<Promocao/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
