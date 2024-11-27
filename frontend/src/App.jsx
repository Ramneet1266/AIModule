import Login from './components/login/Login'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Register from './components/register/Register'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
