import { Link } from "react-router-dom";

import HomePageImage from "../assets/HomePageImage.png"
import HomeLayout from "../layouts/HomeLayout.jsx";

const Home=()=>{
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 mx-16 min-h-[90vh] pb-10">
                <div className="md:w-1/2 md:space-y-6 space-y-3">
                    <h1 className="md:text-5xl  text-3xl font-semibold">Find out best <span className="text-yellow-500">Online Cousres</span></h1>
                    <p >
                        We have have large library of courses taught by highly sjille dqualified faculties at avery afforadable cost
                    </p>
                    <div className="space-x-6 flex">
                        <Link to='/courses'>
                            <button className="bg-yellow-500 md:px-5 md:py-3 rounded-md p-2 font-semibold cursor-pointer md:text-lg hover:bg-yellow-600 transition-all ease-in-out">
                                Explore courses
                            </button>
                    </Link>
                        <Link to='/contact'>
                            <button className="border-yellow-500 border-2 md:px-5 md:py-3 p-2 rounded-md font-semibold cursor-pointer md:text-lg hover:bg-yellow-600 transition-all ease-in-out">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 md:h-full  flex items-center justify-center">
                    <img src={HomePageImage}/>
                </div>

            </div>
        </HomeLayout>
    )
}
export default Home;