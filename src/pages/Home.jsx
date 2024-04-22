import { Link } from "react-router-dom";

import HomePageImage from "../assets/HomePageImage.png"
import HomeLayout from "../layouts/HomeLayout.jsx";

const Home=()=>{
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[100vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">Find out beast <span className="text-yellow-500">Online Cousre</span></h1>
                    <p>
                        We have have large library of courses taught by highly sjille dqualified faculties at avery afforadable cost
                    </p>
                    <div className="space-x-6">
                        <Link to='/courses'>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold cursor-pointer text-lg hover:bg-yellow-600 transition-all ease-in-out">
                                Explore courses
                            </button>
                        </Link>
                        <Link to='/contact'>
                            <button className="border-yellow-500 border-2 px-5 py-3 rounded-md font-semibold cursor-pointer text-lg hover:bg-yellow-600 transition-all ease-in-out">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={HomePageImage}/>
                </div>

            </div>
        </HomeLayout>
    )
}
export default Home;