import Login from './components/login/Login'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Register from './components/register/Register'
import Resume_template from './components/resume_template/Resume_template'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/template' element={<Resume_template/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
