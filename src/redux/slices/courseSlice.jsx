/* eslint-disable no-unsafe-optional-chaining */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"
const initialState={
    courseList:[]
}



export const getAllCourses=createAsyncThunk('/courses/getAllCourses',async (data)=>{
    try{
        const response= axiosInstance.get('/courses',data);
        toast.promise(response,{
            loading:"wait! fetching all courses",
            success:(data)=>{
                return data?.data?.message;
            },
            
            error:  "failed to load courses"
    
        });
        
        
        return (await response).data.courses; 
    }
    catch(error){
        
        toast.error(error?.response?.data?.message)
    }
})

export const createNewCourse=createAsyncThunk('/course/create',async (data)=>{
    try{
        let formData=new FormData();
        formData.append('title',data?.title);
        formData.append( 'description',data?.description);
        formData.append('category',data?.category);
        formData.append("createdBy",data?.createdBy);
        formData.append('thumbnail',data?.thumbnail)
    
        const response= axiosInstance.post('/courses',formData);
        
        toast.promise(response,{
            loading:"wait! creating new courses",
            success:(data)=>{
                return data?.data?.message;
            },
            
            error:  "failed to create courses"
    
        });
        
        
        return (await response).data; 
    }
    catch(error){
        
        toast.error(error?.response?.data?.message)
    }
})


const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            
            if(action?.payload){
               
                state.courseList=[...action?.payload];
            }
        })
    }
    
})
export default courseSlice.reducer;