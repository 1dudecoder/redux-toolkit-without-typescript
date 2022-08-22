import { createSlice } from "@reduxjs/toolkit"
import { getData } from "./ApiSlice"

const initialState = {
    count:10
}

const CountSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increase: (state,action)=>{
            state.count += action.payload
        },
        decrese: (state,action) => {
            state.count -= action.payload
        },
        reset: (state) => {
            state.count = 0;
        },
    },

    extraReducers: (builder)=>{
        //it check other reducer actions 
        // and based on those action 
        // it can also change value of other reducers  
        builder.addCase(getData.fulfilled, (state, action) => {
            state.count += 5 
        })
    }
})

export default CountSlice.reducer;
export const {increase,decrese,reset} = CountSlice.actions
export const countstore = CountSlice.state