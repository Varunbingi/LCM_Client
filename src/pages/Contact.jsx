import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../config/axiosInstance";
import { isEmail } from "../helpers/regexMatcher";
import HomeLayout from "../layouts/HomeLayout";


const Contact=()=>{
    const [userInput,setUserInput]=useState({
        name:"",
        email:'',
        message:""
    })
    const handleInputChange=(e)=>{
        const {name,value}=e.target;

        setUserInput({
            ...userInput,
            [name]:value
        });
    }
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        if(!userInput.email||!userInput.message||!userInput.name){
            toast.error("All fields are required");
            return;
        }
        if(!isEmail(userInput.email)){
            toast.error("Invaild email provided");
            return;
        }
        try{
            const response=axiosInstance.post('/contact',userInput);
            toast.promise(response,{
                loading:"Submitting your query",
                success:"Form submitted successfully",
                error:"Failed to submit the form"
            });
            const responseData=await response;
            if(responseData?.data){
                setUserInput({
                    name:"",
                    email:'',
                    message:""
                })
            }
        }
        catch(error){
            toast.error("Opertion failed")
        }


    }
    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white w-[22rem] shadow-[0_0_10px_black]">
                    <h1 className="text-3xl font-semibold text-yellow-500">
                        Contact form
                    </h1>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name"className="text-xl font-semibold" >Name:</label>
                        <input type="text" id="name" name="name" className="bg-white border px-2 py-1 rounded-md text-black" placeholder="Enter your name" 
                        value={userInput.name} 
                        onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email"className="text-xl font-semibold" >Email:</label>
                        <input type="email" id="email" name="email" className="bg-white border px-2 py-1 rounded-md text-black" placeholder="Enter your email" 
                        value={userInput.email} 
                        onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message"className="text-xl font-semibold" >Message:</label>
                        <textarea type="text" id="message" name="message" className="bg-white border px-2 py-1 rounded-sm resize-none h-40 text-black" placeholder="Enter your message.... "
                        value={userInput.message} onChange={handleInputChange}/>
                    </div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-700 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer">
                        Submit
                    </button>
                </form>

            </div>
        </HomeLayout>
    )
}

export default Contact;