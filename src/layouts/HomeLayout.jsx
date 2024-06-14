import { useEffect } from "react";
import toast from "react-hot-toast";
import {AiFillCloseCircle} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx"
import { logout } from "../redux/slices/authSlice.jsx";
const HomeLayout=({children})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn);
    const token=useSelector(state=>state?.auth?.token);
    const role=useSelector((state)=>state?.auth?.role);
    const onLogout=async(e)=>{
        e.preventDefault();
        const response=await dispatch(logout());
        
        if(response?.payload?.data)
           navigate('/')
        

        
    } 
    const autoLogout=async()=>{
        
        const response=await dispatch(logout());
        
        if(response?.payload?.data){
            toast("Token expried, please login again")
            navigate('/')
        }
           
        

        
    } 
    
    useEffect(() => {
        if (token) {
            const LOGIN_DURATION = 24*60* 60 * 1000; 

            const logoutTimer = setTimeout(() => {
                autoLogout();
            }, LOGIN_DURATION);

            // Cleanup timeout if token changes or component unmounts
            return () => clearTimeout(logoutTimer);
        }
    }, [token]);
    const changeWidth=()=>{
        const drawerSide=document.getElementsByClassName("drawer-side");
        
        drawerSide[0].style.width="auto";

    }
    const hideDrawer=()=>{
        const element=document.getElementsByClassName('drawer-toggle');
        element[0].checked=false;
        const drawerSide=document.getElementsByClassName("drawer-side");
        
        drawerSide[0].style.width="0";

    }
    return (
        
        
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                
                    <label htmlFor="my-drawer" className=""><FiMenu size={"32px"}
                    onClick={changeWidth} className="text-white m-4 font-bold"/></label>
                </div> 
                <div className="drawer-side w-0">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 sm:w-80 w-48 h-[100%] bg-base-200 text-base-content relative">
                <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}/>
                        </button>
                </li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                {
                    isLoggedIn && role==="ADMIN"&&(
                        <li>
                            <Link to={"/admin/dashboard"}>
                                Admin Dashboard
                            </Link>
                        </li>
                    )
                }
                  {
                    isLoggedIn && role==="ADMIN"&&(
                        <li>
                            <Link to={"/course/create"}>
                                Create Course
                            </Link>
                        </li>
                    )
                }
                <li>
                    <Link to={"/about"}>About Us</Link>
                </li> 
                <li>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link to={"/courses"}>All Course</Link>
                </li>
                {
                    !isLoggedIn?(
                        <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="bg-violet-700       px-4 py-1 font-semibold rounded-md w-full  text-white">
                                    <Link to={"/signin"}>
                                        SignIn
                                    </Link>
                                </button>
                                <button className="bg-purple-700 px-4 py-1 font-semibold rounded-md w-full text-white">
                                    <Link to={"/signup"}>
                                        Signup
                                    </Link>
                                </button>
                            </div>
                        </li> 
                    ):(
                        <li className="absolute bottom-4 w-[90%]">
                        <div className="w-full flex justify-center items-center">
                            <button className="bg-violet-700 px-4 py-1 font-semibold rounded-md text-white ">
                                <Link to={"/user/profile"}>
                                    Profile
                                </Link>
                            </button>
                            <button className="bg-purple-700  text-white  px-4 py-1 font-semibold rounded-md ">
                                <Link onClick={onLogout}>
                                    Logout
                                </Link>
                            </button>
                        </div>
                    </li>
                    )
                }
                
                </ul>
            </div>

            
            </div>
            {children}
            <Footer/>
        
        </div>
        
    )
}
export  default HomeLayout;