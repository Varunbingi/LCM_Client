import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from "../../layouts/HomeLayout";
import { getUserData } from '../../redux/slices/authSlice';
import { cancleCourseBundle } from '../../redux/slices/razorPaySlice.jsx';


const profile=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

const userData=useSelector(state=>state?.auth?.data);

const handleCancallation=async()=>{
    toast("Initiating cancellation");
    await dispatch(cancleCourseBundle())
    await dispatch(getUserData());
    toast.success("cancellation complete");
    navigate('/')
}


 return(
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center p-6">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white shadow-[0_0_10px_black] overflow-hidden">
                    <img src={userData?.avatar?.secure_url} className="w-40 m-auto rounded-full border border-black" />
                    <h3 className='text-center text-xl font-semibold capitalize'>{userData?.fullName}</h3>
                    <div className='grid grid-cols-2'>
                        <p>Email:</p><p> {userData?.email}</p>
                        <p >Role: </p><p>{userData?.role}</p>
                        <p>Subscription:</p><p> {userData?.subscription?.status==='active'?"Active":"Inactive"} </p>

                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <Link to='/changepassword' className='w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all text-center ease-in-out duration-300 px-2 font-semibold py-1'><button>Change Password</button></Link>
                        <Link to='/user/editprofile' className='w-1/2  text-center bg-yellow-600 font-semibold hover:bg-yellow-500 transition-all ease-in-out duration-300 px-2 py-1'><button >Edit Profile</button></Link>

                    </div>
                    <div>
                        {userData?.subscription?.status==='active'&&(
                            <button onClick={handleCancallation} className='bg-red-600 hover:bg-red-500 w-full transition-all ease-in-out duration-300 px-2 py-1 '>Cancel subscription</button>
                        )}
                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}
export default profile;