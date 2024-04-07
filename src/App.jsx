
import './App.css'

import { Route,Routes } from 'react-router-dom';

import Aboutus from './pages/Aboutus.jsx';
import Contact from './pages/Contact.jsx';
import Denied from './pages/Denied.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';




function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/denied' element={<Denied/>}/>
    </Routes>
  
  )
}

export default App;
