import { configureStore } from "@reduxjs/toolkit";  

import loginReducer from "./LoginSlice";
import MovieSliceReducer from "./MovieSlice";

export const Store=configureStore({
    reducer:{
       login:loginReducer,
       movie:MovieSliceReducer,
    }
 })

 export type IRootState = ReturnType<typeof Store.getState>