import countSlice from "../slice/CountSlice"
import {configureStore} from "@reduxjs/toolkit"
import apiReducer from "../slice/ApiSlice"

//it is combination of combinereducer 
///under the hook rtk use immer and redux-thunk inbuild
export const store = configureStore({
    reducer:{
        count:countSlice,
        api:apiReducer,
    }
})

