import { createSlice } from "@reduxjs/toolkit";
import {TProduct} from "@customTypes/product"
import {TLoading} from "@customTypes/shared"
import actGetProducts from "./act/actGetProductPrivex";

interface IProductsSlice {
    records:TProduct[],
    loading:TLoading, 
    error:null | string
}


const initialState:IProductsSlice ={
    records:[],
    loading:"idle", 
    error:null
}
const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actGetProducts.pending,(state)=>{
            state.loading = "pending";
            state.error = null
        })
        builder.addCase(actGetProducts.fulfilled,(state,action)=>{
            state.loading = "succeeded";
            state.records = action.payload
        })
        builder.addCase(actGetProducts.rejected,(state,action)=>{
            state.loading = "failed";
            if(action.payload  && typeof action.payload  === "string"){
                state.error = action.payload 
            }
        })
    }
})

export default productsSlice.reducer