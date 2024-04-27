import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { isEmail} from "../helpers/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import { login } from "../redux/slices/authSlice";

const SignIn=()=>{
    const navitgate=useNavigate();
    const dispatch=useDispatch();
    const [signinDetails, setSigninDetails]=useState({
        email:"",
        password:"",
    

    })
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        
        if(!signinDetails.email|| !signinDetails.password){
            toast.error("please fill all the details");
            return;
        }
    
        if(!isEmail(signinDetails.email)){
            toast.error("Please enter a valid Email Address")
            return;
        }
       
        const response=await dispatch(login(signinDetails)) 
         
         if(response?.payload?.data){
            navitgate('/')
         }
         setSigninDetails({
            email:'',
            password:'',
         })
         
    }
    const handleUserInput=(e)=>{
        const {name,value}=e.target;
        setSigninDetails({
            ...signinDetails,
            [name]:value
        })
    }

    
    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh] ">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col rounded-lg justify-center gap-3 p-10 text-white shadow-[0_0_10px_black] ">
                    <h1 className="text-2xl text-center font-bold">
                        Login page
                    </h1>
  
      
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input onChange={handleUserInput}
                        value={signinDetails.email}  required type="email" name="email" id="email" className="bg-transparent px-2 py-1 border" placeholder="Enter your email"/>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input onChange={handleUserInput}
                        value={signinDetails.password}  required type="password" name="password" id="password" className="bg-transparent px-2 py-1 border" placeholder="Enter your password"/>
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer px-2 py-1">
                        Sign In
                    </button>
                    <Link to={"/reset"}><p className="text-right text-accent">forgot password ?</p></Link>
                    <p className="text-center">
                        Donot have an acoount? <Link to={"/signup"} className="cursor-pointer text-accent">Sign up</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}
export default SignIn;