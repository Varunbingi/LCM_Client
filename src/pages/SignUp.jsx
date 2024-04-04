import { useState } from "react";
import { toast } from 'react-hot-toast';
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { isEmail, isValidPassword } from "../helpers/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";
import { createAccount } from "../redux/slices/authSlice";

const SignUp=()=>{
    const navitgate=useNavigate();
    const dispatch=useDispatch();
    const [signupDetails, setSignupDetails]=useState({
        email:"",
        fullName:"",
        password:"",
        avatar:""

    })
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        
        if(!signupDetails.email|| !signupDetails.password||!signupDetails.fullName){
            toast.error("please fill all the details");
            return;
        }
        if(signupDetails.fullName.length<5){
            toast.error("Name should be atleast of 5 Characters");
            return;
        }
        if(!isEmail(signupDetails.email)){
            toast.error("Please enter a valid Email Address")
            return;
        }if(!isValidPassword(signupDetails.password)){
            toast.error("Invaild password provided, password should  contain 6 to 16 character long with  one number and one special character");
            return;
        } 
        const formData=new FormData();
        formData.append("fullName",signupDetails.fullName);
        formData.append("avatar", signupDetails.avatar);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password)
        const response=await dispatch(createAccount(formData)) 
         
         if(response?.payload?.data){
            navitgate('/')
         }
         setSignupDetails({
            email:'',
            fullName:'',
            password:'',
            avatar:''
         })
         setPreviewImage('');
    }
    const handleUserInput=(e)=>{
        const {name,value}=e.target;
        setSignupDetails({
            ...signupDetails,
            [name]:value
        })
    }
    const handleImage=(e)=>{
        e.preventDefault();
        const uploadedImage=e.target.files[0];
        if(!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar:uploadedImage
        })
        const fileReader=new FileReader();
        fileReader.readAsDataURL(uploadedImage),
        fileReader.addEventListener('load',function (){
            setPreviewImage(this.result)
        })
        
    }
    const [previewImage,setPreviewImage]=useState('');
    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh] ">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col rounded-lg justify-center gap-3 p-4 text-white">
                    <h1 className="text-2xl text-center font-bold">
                        Registration page
                    </h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {
                            previewImage?(
                                <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                            ):(
                                <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                            )
                        }
                    </label>
                    <input type="file" onChange={handleImage} className="hidden"
                    name="image_uploads " id="image_uploads" accept=".jpg,.jpeg,.png,.svg" />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">
                            Name
                        </label>
                        <input onChange={handleUserInput}
                        value={signupDetails.fullName}  required type="text" name="fullName" id="fullName" className="bg-transparent px-2 py-1 border" placeholder="Enter your username"/>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input onChange={handleUserInput}
                        value={signupDetails.email}  required type="email" name="email" id="email" className="bg-transparent px-2 py-1 border" placeholder="Enter your email"/>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input onChange={handleUserInput}
                        value={signupDetails.password}  required type="password" name="password" id="password" className="bg-transparent px-2 py-1 border" placeholder="Enter your password"/>
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer px-2 py-1">
                        Create account
                    </button>
                    <p className="text-center">
                        Already have an acoount? <Link to={"/login"} className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}
export default SignUp;