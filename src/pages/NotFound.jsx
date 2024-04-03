import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const navigate=useNavigate();
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center ">
            <h1 className="font-bold text-9xl text-white">404</h1>
            <div className="bg-black text-white px-2 absolute text-sm rounded-md rotate-12">
                page not found
            </div>
            <button className="mt-5"> 
                <a onClick={()=>navigate(-1)}
                className="relative inline-block text-sm font-medium text-rose-400">
                     <span className="relative block px-8 py-3 border border-current">Go back</span>
                </a>
            </button>
        </div>
    )

}
export default NotFound;