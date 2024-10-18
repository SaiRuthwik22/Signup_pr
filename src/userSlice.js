import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{
        name:"",
        email:"",
        password:""}
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userDetails.name = action.payload.name
            state.userDetails.email = action.payload.email
            state.userDetails.password = action.payload.password
            localStorage.setItem("user",JSON.stringify(state.userDetails))
            localStorage.setItem("accessToken",JSON.stringify(nanoid()))
        },
        removeUser:(state)=>{
            state.userDetails.name = ""
            state.userDetails.email = ""
            state.userDetails.password = ""
        }
    }
})

export const {addUser,removeUser} = userSlice.actions

export const userReducer = userSlice.reducer