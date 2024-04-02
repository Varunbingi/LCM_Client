import {AiFillCloseCircle} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { Link } from "react-router-dom";

import Footer from "../components/Footer.jsx"
const HomeLayout=({children})=>{
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
                <ul className="menu p-4 sm:w-80 w-48 bg-base-200 text-base-content relative">
                <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}/>
                        </button>
                </li>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About Us</Link>
                </li> 
                <li>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link to={"/course"}>All Course</Link>
                </li>
                
                </ul>
            </div>

            
            </div>
            {children}
            <Footer/>
        
        </div>
        
    )
}
export  default HomeLayout;