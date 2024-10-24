import { createAsyncThunk } from "@reduxjs/toolkit";
import {TCategory} from "@customTypes/category"
import axios from "axios";


const actGetcatecories = createAsyncThunk("categories/actGetcategories",async (_,thunkApi)=>{
    try{
      const response = await axios.get<TCategory[]>("http://localhost:3000/categories")
      return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)){
            return thunkApi.rejectWithValue(error.response?.data.message || error.message)
        }
        else{
            return thunkApi.rejectWithValue("An unexpected error")
        }
    }
})

export default actGetcatecories;