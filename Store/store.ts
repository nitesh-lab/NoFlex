import { configureStore } from "@reduxjs/toolkit";  

import loginReducer from "./LoginSlice";

export const Store=configureStore({
    reducer:{
       login:loginReducer,
    }
 })

 export type IRootState = ReturnType<typeof Store.getState>