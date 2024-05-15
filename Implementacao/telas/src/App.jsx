import { useState } from 'react'
import Login from './pages/Login'
import Recuperar from './pages/Recuperar'
import Registrar from './pages/Registrar'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Registrar/>
    </div>
  )
}

export default App
