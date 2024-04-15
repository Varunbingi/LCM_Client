
import './App.css'

import { Route,Routes } from 'react-router-dom';

import RequireAuth from './components/Auth/RequireAuth.jsx';
import CourseDescription from './components/CourseDescription.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contact from './pages/Contact.jsx';
import CourseList from './pages/Course/CourseList.jsx';
import CreateCourse from './pages/Course/CreateCourse.jsx';
import Denied from './pages/Denied.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/User/Profile.jsx';




function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/course/description' element={<CourseDescription/>}/>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path='/course/create' element={<CreateCourse/>}/>
      </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN",'USER']} />}>
        <Route path='/user/profile' element={<Profile/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/denied' element={<Denied/>}/>
      <Route path='/courses' element={<CourseList/>}/>
    </Routes>
  
  )
}

export default App;
