import { createAsyncThunk } from "@reduxjs/toolkit";
import {TProduct} from "@customTypes/product"
import axios from "axios";


const actGetProducts = createAsyncThunk("products/actGetProducts",async(privex:string,thunkApi)=>{
        try{
            const response = await axios.get<TProduct>(`http://localhost:3000/products?cat_prefix=${privex}`);
            return response.data;
        }
        catch(error){
            if(axios.isAxiosError(error)){  
            throw thunkApi.rejectWithValue(error.response?.data.message || error.message)
            }
            else{
            throw thunkApi.rejectWithValue("An Expected Error")
            }
        }
})

export default actGetProducts;