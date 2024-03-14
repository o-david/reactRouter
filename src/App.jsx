import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {
  let allowed= true
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/home/*' element={<Home />}/>
        <Route path='/' element={allowed?<About />:<Navigate to={'/'}/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
