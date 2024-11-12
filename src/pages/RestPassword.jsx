import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { isValidPassword } from "../helpers/regexMatcher";
import { resetPassword } from "../redux/slices/authSlice";


const ResetPassword=()=>{
    const {id}=useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: "",
    });
    const onFormSubmit=async (e)=>{
        e.preventDefault();
        if(!data.password){
            toast.error("All fileds are required");
            return;
        }if(!isValidPassword(data.password)){
            toast.error("Invaild password provided, password should  contain 6 to 16 character long with  one number and one special character");
            return;
        } 
        await dispatch(resetPassword({id,...data}));
        toast.success("Password changed successfully");
        navigate("/");
    }
    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        
        <div className="h-[90vh] flex justify-center items-center">
            <div className="shadow-[0_0_10px_black] flex flex-col justify-center space-y-10 items-center md:w-[22rem] p-10">
                <h1 className="text-yellow-500 text-2xl font-bold">
                    Reset Password
                </h1>
                <form onClick={onFormSubmit} className="flex flex-col md:space-y-6 space-y-3 w-full text-white">
                   
                    <label >New Password :</label>
                    <input  required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter new Password"
                        className="bg-transparent px-2 py-1 border"
                        value={data.password}
                        onChange={handleInputChange}/>
                    <button type="submit" className="bg-yellow-500 p-2 rounded-md  hover:bg-yellow-600 font-semibold">Submit</button>
                </form>
            
            </div>
        </div>
     
    )
}

export default ResetPassword;