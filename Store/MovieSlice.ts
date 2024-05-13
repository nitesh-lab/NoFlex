import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { number } from "zod";

export interface Movie_Type{
    isSelected:number
}
const initialState:Movie_Type={
    isSelected:-1,
}

const Movie_Slice=createSlice({
    name:"Movie",
    initialState,
    reducers:{
        "toggle_Movie":(state:Movie_Type,action:PayloadAction<number>)=>{
            console.log("coming")
            state.isSelected=action.payload
        },
    }
})

export const {toggle_Movie}=Movie_Slice.actions
export default Movie_Slice.reducer;