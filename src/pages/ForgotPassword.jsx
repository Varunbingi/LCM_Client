
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout"
import { forgotPassword } from "../redux/slices/authSlice";
const ForgotPassword=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [data,setData]=useState(
    {
        email:""
    }
    );
    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        const response=await dispatch(forgotPassword(data));
        if(response?.payload?.data){
        toast.success("Mail sent successfull");
        navigate("/");
        }
    }
    return(
        <HomeLayout>
            <div className="h-[90vh] flex justify-center items-center">
                <div className="shadow-[0_0_10px_black] flex flex-col justify-center space-y-10 items-center md:w-[22rem] p-10">
                    <h1 className="text-yellow-500 text-2xl font-bold">
                        Forgot Password 
                    </h1>
                    <form onClick={onFormSubmit} noValidate  className="flex flex-col md:space-y-6 space-y-3 w-full text-white">
                        <label htmlFor="email">Email :</label>
                        <input  required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-2 py-1 border"
                            value={data.email}
                            onChange={handleInputChange}/>
                        <button  className="bg-yellow-500 p-2 rounded-md  hover:bg-yellow-600 font-semibold">Submit</button>
                    </form>
                    <Link to="/user/profile">
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>
                </div>
            </div>
        </HomeLayout>
    )
}
export default ForgotPassword;