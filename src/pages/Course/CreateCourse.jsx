import { useState } from "react";
import toast from "react-hot-toast"
import {  AiOutlineArrowLeft } from "react-icons/ai";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom"

import HomeLayout from "../../layouts/HomeLayout";
import { createNewCourse } from "../../redux/slices/courseSlice";

const CreateCourse=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [userInput,setUserInput]=useState({
        title:"",
        description:'',
        category:"",
        createdBy:"",
        thumbnail:null,
        previewImage:"",

    });
    const handleImageUpload=(e)=>{
        e.preventDefault();
        const uploadedImage=e.target.files[0];
        if(uploadedImage){
            const fileReader=new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener('load',function(){
                setUserInput({
                    ...userInput,
                    thumbnail:uploadedImage,
                    previewImage:this.result
                })
            })
        }
    }
    const handleUserInput=(e)=>{
        const {name,value}=e.target;
        setUserInput({
            ...userInput,
            [name]:value
        })
        
    }
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        if(!userInput.title||!userInput.description||!userInput.category||!userInput.thumbnail||!userInput.createdBy){
            toast.error("All fileds are requried");
            return;
        }
        const response=await dispatch(createNewCourse(userInput));
        
        if(response?.payload?.success){
            setUserInput({
                title:"",
                description:'',
                category:"",
                createdBy:"",
                thumbnail:null,
                previewImage:"",
            })
            navigate("/courses");
        }
        
    }
    return(
        <HomeLayout>
            <div className="h-[100vh] flex items-center justify-center">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center gap-10 rounded-lg p-4 text-white w-[700px]
                h-[80vh] my-10 shadow-[0_0_10px_black]  relative ">
                    <Link onClick={()=>navigate(-1)} className="absolute top-8 cursor-pointer text-2xl link text-accent">
                    <AiOutlineArrowLeft/>
                    </Link>
                    <h1 className="text-center text-2xl font-bold">Create New Course</h1>
                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {userInput?.previewImage?(
                                        <img src={userInput?.previewImage} className="w-full h-44 m-auto border"/>
                                    ):(
                                        <div className="w-full h-44 m-auto flex items-center justify-center  border-2">
                                            <h1>
                                                Upload course thumbnail
                                            </h1>

                                        </div>
                                    )}
                                </label>
                                <input className="hidden" type="file" id="image_uploads"
                                accept=".jpg,.png,.jpeg,.svg" name="image_uploads" onChange={handleImageUpload}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title" className="text-lg font-semibold">Course Title</label>
                                <input required type="text" name="title" id="title" placeholder="Enter the title of the course"
                                onChange={handleUserInput}
                                value={userInput?.title}
                                className="bg-transparent px-2 py-1 border text-white"/>
                                
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdBy" className="text-lg font-semibold">CreatedBy</label>
                                <input required type="text" name="createdBy" id="createdBy" placeholder="Enter the Instructor name"
                                onChange={handleUserInput}
                                value={userInput?.createdBy}
                                className="bg-transparent px-2 py-1 border"/>
                                
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg font-semibold">Course Category</label>
                                <input required type="text" name="category" id="category" placeholder="Enter the category of the course"
                                onChange={handleUserInput}
                                value={userInput?.category}
                                className="bg-transparent px-2 py-1 border"/>
                                
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg font-semibold">Course Description </label>
                                <textarea required type="text" name="description" id="description" placeholder="Enter the description of the course..."
                                onChange={handleUserInput}
                                value={userInput?.description}
                                className="bg-transparent px-2 py-1 border h-24"/>
                                
                            </div>
                            </div>

                        </div>
                    </main>
                    <button type="submit" className="w-full py-2 rounded-md font-semibold text-lg cursor-pointer bg-yellow-700 hover:bg-yellow-500 transition-all duration-300 ease-in-out ">Create Courses</button>
                </form>

            </div>
        </HomeLayout>
    )
}
export default CreateCourse;