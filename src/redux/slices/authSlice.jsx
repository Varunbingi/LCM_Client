import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"

const initialState={
    isLoggedIn:localStorage.getItem(`isLoggedIn`)||false,
    role:localStorage.getItem('role')|| '',
    data:localStorage.getItem("data")||{}
}

export const createAccount=createAsyncThunk('/auth/signup',async (data)=>{
    try{
        const response= axiosInstance.post('user/register',data);
        
        toast.promise(response,{
            loading:"wait creating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Error Creating Account!"
    
        });
        return await response; 
    }
    catch(error){
        
        toast.error(error?.response?.data?.message)
    }
})
export const login=createAsyncThunk('/auth/signin',async (data)=>{
    try{
        const response= axiosInstance.post('user/login',data);
        
        toast.promise(response,{
            loading:"wait authenticating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Failed To Login Account!"
    
        });
        return await response; 
    }
    catch(error){
        
        toast.error(error?.response?.data?.message)
    }
})
export const logout=createAsyncThunk('/auth/logout',async (data)=>{
    try{
        const response= axiosInstance.post('user/logout',data);
        
        toast.promise(response,{
            loading:"wait! logging out your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Failed To Logout  Account!"
    
        });
        return await response; 
        
    }
    catch(error){
        
        
        toast.error(error?.response?.data?.message)
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.data));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.data?.user?.role);
            state.isLoggedIn=true;
            state.role=action?.payload?.data?.user?.role;
            state.data=action?.payload?.data;
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.isLoggedIn=false;
            state.role='';
            state.data={};
        })
    }
})
export default authSlice.reducer;