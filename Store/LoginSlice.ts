
import { createSlice } from "@reduxjs/toolkit";


export type Login_type={
    openSignIn:boolean
}

const initialState:Login_type={
    openSignIn:false
}


const login_slice=createSlice({
    name:"login",
    initialState,
    reducers:{
        "toggle_Login":(state)=>{
            state.openSignIn=!(state.openSignIn) 
        }
    }
})

export const {toggle_Login}=login_slice.actions

export default login_slice.reducer ;