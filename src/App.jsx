import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from '../home/Home'
import About from '../about/About'
import Service from '../service/Service'
import Contact from '../contact/Contact'
import Navbar from '../components/Navbar'

function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
    
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/service' element={<Service/>}></Route>

  
</Routes>


     
     
     </BrowserRouter> 
    </>
  )
}

export default App
