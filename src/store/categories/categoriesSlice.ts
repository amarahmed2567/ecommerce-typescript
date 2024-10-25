import { createSlice } from "@reduxjs/toolkit";
import actGetcatecories from "./act/actGetcategories";
import {TLoading} from "@customTypes/shared"
import {TCategory} from "@customTypes/category"

interface ICategoriesSlice{
    records:TCategory[];
    loading:TLoading;
    error:string | null;
}

const  initialState:ICategoriesSlice = {
    records:[],
    loading:"idle", 
    error:null

}

const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        cleanUpProduct:(state)=>{
            state.records = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetcatecories.pending,(state)=>{
            state.loading = "pending"
            state.error = null
        }),
        builder.addCase(actGetcatecories.fulfilled,(state,action)=>{
            state.loading = "succeeded";
            state.records = action.payload;
        }),
        builder.addCase(actGetcatecories.rejected,(state,action)=>{
            state.loading = "failed"
            if(action.payload && typeof action.payload === "string"){
                state.error = action.payload
            }
        })
    }
})


// we shoud export actget...
// export  {actGetcatecories}
export const {cleanUpProduct} = categoriesSlice.actions
export default categoriesSlice.reducer;