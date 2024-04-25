import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { isValidPassword } from "../../helpers/regexMatcher";
import HomeLayout from "../../layouts/HomeLayout"
import { updatePassword } from "../../redux/slices/authSlice";

const ChangePassword=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
    });
    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        if(!data.oldPassword||!data.newPassword){
            toast.error("All fileds are required");
            return;
        }if(!isValidPassword(data.newPassword)){
            toast.error("Invaild password provided, password should  contain 6 to 16 character long with  one number and one special character");
            return;
        } 
        await dispatch(updatePassword(data));
        toast.success("Password changed successfully");
        navigate("/");
    }
    return (
        <HomeLayout>
            <div className="h-[90vh] flex justify-center items-center">
                <div className="shadow-[0_0_10px_black] flex flex-col justify-center space-y-10 items-center md:w-[22rem] p-10">
                    <h1 className="text-yellow-500 text-2xl font-bold">
                        Change Password
                    </h1>
                    <form onClick={onFormSubmit} className="flex flex-col md:space-y-6 space-y-3 w-full text-white">
                        <label>Old Password :</label>
                        <input  required
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Enter your oldPassword"
                            className="bg-transparent px-2 py-1 border"
                            value={data.oldPassword}
                            onChange={handleInputChange}/>
                        <label >New Password :</label>
                        <input  required
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter new Password"
                            className="bg-transparent px-2 py-1 border"
                            value={data.newPassword}
                            onChange={handleInputChange}/>
                        <button type="submit" className="bg-yellow-500 p-2 rounded-md  hover:bg-yellow-600 font-semibold">Submit</button>
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
export default ChangePassword;