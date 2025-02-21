
import './App.css'

import { Provider } from 'react-redux';
import { Route,Routes } from 'react-router-dom';

import RequireAuth from './components/Auth/RequireAuth.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contact from './pages/Contact.jsx';
import CourseDescription from './pages/Course/CourseDescription.jsx';
import CourseList from './pages/Course/CourseList.jsx';
import CreateCourse from './pages/Course/CreateCourse.jsx';
import AddLecture from './pages/Dashboard/AddLecture.jsx';
import DisplayLectures from './pages/Dashboard/DisplayLectures.jsx';
import Denied from './pages/Denied.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';
import Checkout from './pages/payment/Checkout.jsx';
import CheckoutFailure from './pages/payment/CheckoutFailure.jsx';
import CheckoutSucess from './pages/payment/CheckoutSuccess.jsx';
import ResetPassword from './pages/RestPassword.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ChangePassword from './pages/User/ChangePassword.jsx';
import EditProfile from './pages/User/EditProfile.jsx';
import Profile from './pages/User/Profile.jsx';
import store from './redux/store.jsx';




function App() {
  

  return (
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/course/description' element={<CourseDescription/>}/>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path='/course/create' element={<CreateCourse/>}/>
        <Route path='/course/addlecture' element={<AddLecture/>}/>
      </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN",'USER']} />}>
        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/courses' element={<CourseList/>}/>
        <Route path='/user/editprofile' element={<EditProfile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/checkout/success' element={<CheckoutSucess/>}/>
        <Route path='/checkout/fail' element={<CheckoutFailure/>}/>
        <Route path='/course/displaylectures' element={<DisplayLectures/>}/>
      </Route>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/denied' element={<Denied/>}/>
      <Route path='/reset' element={<ForgotPassword/>}/>
      <Route path='/reset/:id' element={<ResetPassword/>}/>
    </Routes>
    </Provider>
  
  )
}

export default App;
