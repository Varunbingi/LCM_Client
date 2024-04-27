import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"

const initialState={
    isLoggedIn:localStorage.getItem(`isLoggedIn`)||false,
    role:localStorage.getItem('role')|| '',
    data:JSON.parse(localStorage.getItem("data"))||{}
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
export const forgotPassword=createAsyncThunk('/auth/forgotPassword',async (data)=>{
    try{
        const response= axiosInstance.post('user/reset',data);
        
        toast.promise(response,{
            loading:"wait sending message to mail",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Failed To Send Mail!"
    
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
        return (await response).data; 
        
    }
    catch(error){
        
        
        toast.error(error?.response?.data?.message)
    }
})
export const updateProfile=createAsyncThunk('/auth/update/profile',async (data)=>{
    try{
        const response= axiosInstance.put('user/update',data[1]);
        
        toast.promise(response,{
            loading:"wait updating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Filed to Update your Account!"
    
        });
        return ((await response).data); 
    }
    catch(error){
        
        toast.error(error?.response?.data?.message)
    }
})
export const getUserData=createAsyncThunk('/auth/getData',async ()=>{
    try{
        const response= axiosInstance.get('/user/me');
       
        return ((await response).data); 
    }
    catch(error){
        
        toast.error(error?.message)
    }
})
export const updatePassword=createAsyncThunk('/auth/changePassword',async(data)=>{
    try{
        const response=axiosInstance.post('/user/change-password',data);
        toast.promise(response,{
            loading:"wait updating your password",
            success:(data)=>{
                return data?.data?.message;
            },
            error:  "Filed to Update your password!"
    
        });
        return ((await response).data); 
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
            console.log(action);
            console.log(state)
            localStorage.setItem("data",JSON.stringify(action?.payload?.data?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.data?.user?.role);
            state.isLoggedIn=true;
            state.role=action?.payload?.data?.user?.role;
            state.data=action?.payload?.data?.user;
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.isLoggedIn=false;
            state.role='';
            state.data={};
        }).addCase(getUserData.fulfilled, (state, action) => {
            if (!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.role = action?.payload?.user?.role;
            state.data = action?.payload?.user;
        }).addCase(updatePassword.fulfilled,(state,action)=>{
            console.log(JSON.stringify(state))
            console.log(action);
            if (!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.role = action?.payload?.user?.role;
            state.data = action?.payload?.user;
            
        }).addCase(forgotPassword.fulfilled,(state,action)=>{
            if (!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.role = action?.payload?.user?.role;
            state.data = action?.payload?.user;
        })
        
    }
})
export default authSlice.reducer;