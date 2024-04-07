import {useNavigate} from 'react-router-dom'
const Denied=()=>{
    const navigate=useNavigate();

    return(
        <div className="flex flex-col justify-center h-screen items-center ">
            <h1 className='text-9xl text-white font-bold '>
                404
            </h1>
            <div className='absolute rotate-12 z-50 bg-black rounded-md text-white px-2'>
                Access denied
            </div>
            <button onClick={()=>navigate(-1)} className=' bg-black  px-2 text-white rounded-md mt-5 border-white border-2'>
                Go Back
            </button>
        </div>
    )
}

export default Denied;