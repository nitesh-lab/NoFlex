
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type Login_type={
    openSignIn:boolean,
    email:string
}

const initialState:Login_type={
    openSignIn:false,
    email:"",
}


const login_slice=createSlice({
    name:"login",
    initialState,
    reducers:{
        "toggle_Login":(state)=>{
            state.openSignIn=!(state.openSignIn) 
        },
        "Email_Input":(state,action:PayloadAction<string>)=>{
            state.email=action.payload;
        }
    }
})

export const {toggle_Login,Email_Input}=login_slice.actions

export default login_slice.reducer ;